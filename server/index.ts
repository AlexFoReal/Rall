import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './routers/_app';
import { createContext } from './context';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});