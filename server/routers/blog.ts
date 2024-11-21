import { z } from 'zod';
import { router, publicProcedure, protectedProcedure, adminProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';

const postSchema = z.object({
  title: z.string().min(3, 'Titel muss mindestens 3 Zeichen lang sein'),
  content: z.string().min(10, 'Inhalt muss mindestens 10 Zeichen lang sein'),
  slug: z.string(),
  published: z.boolean().default(false),
});

export const blogRouter = router({
  getAllPublished: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: { published: true },
      include: { author: true },
      orderBy: { createdAt: 'desc' },
    });
  }),

  getBySlug: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { slug: input },
        include: { author: true },
      });

      if (!post || (!post.published && ctx.user?.role !== 'ADMIN')) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Beitrag nicht gefunden',
        });
      }

      return post;
    }),

  create: adminProcedure
    .input(postSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          ...input,
          authorId: ctx.user.id,
        },
      });
    }),

  update: adminProcedure
    .input(z.object({
      id: z.string(),
      data: postSchema,
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: adminProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.delete({
        where: { id: input },
      });
    }),
});