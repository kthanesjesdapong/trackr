import { PrismaClient } from "@prisma/client";

//Used in IApolloServerContext
export interface IPrismaContext {
  prisma: PrismaClient;
}