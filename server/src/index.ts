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
import { IApolloServerContext } from '../src/interfaces/IApolloServerContext';


// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};




const app = express();
const port = config.get<number>('port');
//httpServer handles inc req to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

app.use(express.json());


// Apollo Server initialization, plus drain plugin for our httpServer
const server = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
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
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  await new Promise<void>((resolve) => httpServer.listen({
    port: port
  }, () => {
    logger.info(`App is running at http://localhost:${port}`);
    routes(app);
  }));
  await connect();
};
server();






// app.listen(port, async () => {
//   logger.info(`App is running at http://localhost:${port}`);
//   await connect();
//   //Mounting Our Routes
//   routes(app);

// });