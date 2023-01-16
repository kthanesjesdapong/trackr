import { prisma } from '$prisma/prismaClient';
import { userPoolsClient } from '@utils/cognitoClient';
import { IContext } from '@interfaces/IContext';


//Apollo Server Context, passed to expressMiddleware()
const apolloServerContext: IContext = {
  prisma,
  cognito: userPoolsClient
};



export default apolloServerContext;