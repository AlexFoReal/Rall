import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(6, 'Telefonnummer muss mindestens 6 Zeichen lang sein'),
  date: z.string(),
  time: z.string(),
  type: z.string(),
  message: z.string().optional(),
});

export const appointmentRouter = router({
  create: publicProcedure
    .input(appointmentSchema)
    .mutation(async ({ ctx, input }) => {
      const appointment = await ctx.prisma.appointment.create({
        data: {
          ...input,
          date: new Date(input.date),
        },
      });

      // Send confirmation email
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
        to: input.email,
        subject: 'Terminbestätigung',
        text: `
          Sehr geehrte(r) ${input.name},

          vielen Dank für Ihre Terminanfrage. Wir werden uns schnellstmöglich bei Ihnen melden.

          Ihre Termindetails:
          Datum: ${input.date}
          Uhrzeit: ${input.time}
          Typ: ${input.type}

          Mit freundlichen Grüßen
          Ihr Team von MR Rolladen Rall
        `,
      });

      return appointment;
    }),

  getAll: adminProcedure.query(async ({ ctx }) => {
    return ctx.prisma.appointment.findMany({
      orderBy: { date: 'asc' },
    });
  }),

  updateStatus: adminProcedure
    .input(z.object({
      id: z.string(),
      status: z.enum(['PENDING', 'CONFIRMED', 'CANCELLED']),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.appointment.update({
        where: { id: input.id },
        data: { status: input.status },
      });
    }),
});