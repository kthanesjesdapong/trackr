import { IContext } from "../interfaces/IContext";
import { prisma } from '../prisma/prismaClient';
import { userPoolsClient } from "../utils/cognitoClient";

//Apollo Server Context, passed to expressMiddleware()
const apolloServerContext: IContext = {
  prisma,
  cognito: userPoolsClient
};

export default apolloServerContext;