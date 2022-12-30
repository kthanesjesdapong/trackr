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
import { IPrismaContext } from './interfaces/IPrismaContext';
export * from './utils/seedServer';
import apolloServerConfig from './config/apolloServerConfig';
import { httpServer } from './config/apolloServerConfig';
import { app } from './config/apolloServerConfig';


const port = config.get<number>('port');


app.use(express.json());


// Apollo Server initialization, plus drain plugin for our httpServer
export const server = async () => {

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
      context: async () => ({
        prisma: prisma,
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
