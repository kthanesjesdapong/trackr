import { IPrismaContext } from "./IPrismaContext";

//Put later into startserver to createContext
export interface IApolloServerContext {
  prismaContext: IPrismaContext;
}