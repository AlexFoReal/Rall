import { router } from '../trpc';
import { contactRouter } from './contact';
import { appointmentRouter } from './appointment';
import { blogRouter } from './blog';

export const appRouter = router({
  contact: contactRouter,
  appointment: appointmentRouter,
  blog: blogRouter,
});

export type AppRouter = typeof appRouter;