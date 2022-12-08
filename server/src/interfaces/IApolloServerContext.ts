import { PrismaClient } from "@prisma/client";

//Put later into startserver to createContext
export interface IApolloServerContext {
  prisma: PrismaClient;
}