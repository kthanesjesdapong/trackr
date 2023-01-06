import 'dotenv/config';
import express from 'express';
import logger from './utils/logger';
import config from "config";
import connect from './prisma/prismaClient';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
export * from './utils/seedServer';
import { httpServer } from './config/apolloServerConfig';
import { app } from './config/apolloServerConfig';
import apolloServerConfig from './config/apolloServerConfig';
import { IContext } from './interfaces/IContext';
import apolloServerContext from './config/apolloContext';
const port = config.get<number>('port');


app.use(express.json());

// Apollo Server initialization, plus drain plugin for our httpServer
export const server = async () => {
  // The generic type tells our ApolloServer what the type of our context will be
  const apolloServer = new ApolloServer<IContext>(apolloServerConfig
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
      context: async () => (apolloServerContext),
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
