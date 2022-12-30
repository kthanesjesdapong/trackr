import 'dotenv/config';
import express from 'express';
import logger from './utils/logger';
import config from "config";
import connect from './prisma/client';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { schema } from './graphql/schema/schema';
import { prisma } from './prisma/client';
import { IPrismaContext } from './interfaces/IPrismaContext';
export * from './utils/seedServer';


const app = express();

const port = config.get<number>('port');
//httpServer handles inc req to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

app.use(express.json());



export const apolloServerConfig = {
  schema: schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
};


// Apollo Server initialization, plus drain plugin for our httpServer
export const server = async () => {

  const apolloServer = new ApolloServer<IPrismaContext>(apolloServerConfig
    //   {
    //   schema: schema,
    //   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    // }

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
      context: async ({ req, res }) => ({
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
