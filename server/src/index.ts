import 'dotenv/config';
import express from 'express';
import logger from './utils/logger';
import config from "config";
import connect from './prisma/prismaClient';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import { prisma } from './prisma/prismaClient';
export * from './utils/seedServer';
import apolloServerConfig from './config/apolloServerConfig';
import { httpServer } from './config/apolloServerConfig';
import { app } from './config/apolloServerConfig';
import { PrismaClient } from '@prisma/client';
//Line 28, ApolloServer<IPrismaContext>;
import { IPrismaContext } from './interfaces/IPrismaContext';

const port = config.get<number>('port');


app.use(express.json());

// <IPrismaContext>
// Apollo Server initialization, plus drain plugin for our httpServer
export const server = async () => {
  // The generic type tells our ApolloServer what the type of our context will be
  const apolloServer = new ApolloServer<IPrismaContext>(apolloServerConfig
  );
  await apolloServer.start();
  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(apolloServer, {
      //Share data throughout your server
      //With IPrismaContext set as the type for ApolloServer, wrapping () around {} after the arrow works
      context: async () => ({
        //Sources for fetching data
        prisma: prisma
      }),
    }),
  );
  await new Promise<void>((resolve) => httpServer.listen({
    port: port
  }, () => {
    logger.info(`App is running at http://localhost:${port}`);
  }));
  await connect();
};
server();
