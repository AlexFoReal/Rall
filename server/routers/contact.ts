import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

export const contactRouter = router({
  submit: publicProcedure
    .input(contactSchema)
    .mutation(async ({ ctx, input }) => {
      const contact = await ctx.prisma.contact.create({
        data: input,
      });

      // Send notification email
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.NOTIFICATION_EMAIL,
        subject: 'Neue Kontaktanfrage',
        text: `
          Name: ${input.name}
          Email: ${input.email}
          Telefon: ${input.phone || 'Nicht angegeben'}
          Nachricht: ${input.message}
        `,
      });

      return contact;
    }),

  getAll: adminProcedure.query(async ({ ctx }) => {
    return ctx.prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),

  updateStatus: adminProcedure
    .input(z.object({
      id: z.string(),
      status: z.enum(['NEW', 'IN_PROGRESS', 'COMPLETED']),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.contact.update({
        where: { id: input.id },
        data: { status: input.status },
      });
    }),
});