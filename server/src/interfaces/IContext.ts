import { PrismaClient } from "@prisma/client";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

//provides prismaContext, and cognitoContext for both ApolloServer AND Pothos
export interface IContext {
  prisma: PrismaClient;
  cognito: CognitoIdentityProviderClient;
}