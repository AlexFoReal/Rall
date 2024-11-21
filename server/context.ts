import { inferAsyncReturnType } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';
import { prisma } from './db';

export async function createContext({ req, res }: CreateExpressContextOptions) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
        });
        return user;
      } catch {
        return null;
      }
    }
    return null;
  }

  const user = await getUserFromHeader();

  return {
    req,
    res,
    prisma,
    user,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;