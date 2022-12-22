import 'dotenv/config';
import express from 'express';
import logger from './utils/logger';
import config from "config";
import routes from './routes/index';
import connect from './prisma/client';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { schema } from './graphql/schema/schema';
import { prisma } from './prisma/client';
import { IPrismaContext } from './prisma/IPrismaContext';


const app = express();
const SEED_PORT = config.get<number>('SEED_PORT');

//Server for Seeding
const seedServer = async () => {
  app.listen(SEED_PORT, async () => {
    console.log('Line 24, seedServer Func, server/');
    routes(app);
  });
};


const port = config.get<number>('port');
//httpServer handles inc req to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

app.use(express.json());

// Apollo Server initialization, plus drain plugin for our httpServer
const server = async () => {

  const apolloServer = new ApolloServer<IPrismaContext>({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
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
seedServer();