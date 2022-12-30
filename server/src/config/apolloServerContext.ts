import { IApolloServerContext } from "../interfaces/IApolloServerContext";
import prismaContext from "../prisma/IPrismaContext";

const apolloServerContext: IApolloServerContext = {
  prismaContext
};

export default apolloServerContext;