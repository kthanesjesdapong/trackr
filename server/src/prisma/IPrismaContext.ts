import { PrismaClient } from '@prisma/client';

// Interface for Prisma
export interface IPrismaContext {
  prisma: PrismaClient;
}
