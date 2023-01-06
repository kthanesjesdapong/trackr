// import schema
import { schema } from '../graphql/schema/schema';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';

export const app = express();
//httpServer handles inc req to our Express app
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
export const httpServer = http.createServer(app);

const apolloServerConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]

};

export default apolloServerConfig;

//In v4 the context fc is a named arg passed into your web integration func (expressMiddleware())

//Apollo Server has generic type param

// the context fc should return an obj, which is then accessible to your server's resolvers and plugins