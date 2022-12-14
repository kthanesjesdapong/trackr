import { ApolloServer } from '@apollo/server';
import express, { Request, Response } from "express";
import { DocumentNode, print } from "graphql";
import http from "http";
import { IContext } from '../interfaces/IContext';
import cors from 'cors';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import request from "supertest";
import apolloServerConfig from "../config/apolloServerConfig";
import apolloServerContext from '../config/apolloContext';
// A function to create the config for an Apollo Server. This is different from project to project, so take in your configuration from your project.

let cachedServer: any;

const createServer = async () => {
  //Init Express App
  const app = express();
  //init ApolloServer
  const apolloServer = new ApolloServer<IContext>(apolloServerConfig
  );


  const httpServer = http.createServer(app);

  await apolloServer.start();


  //Configure the Apollo Server to take in context, bodyparser, and corse
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),

    expressMiddleware(apolloServer, {
      context: async () => (apolloServerContext),
    }),
  );
  return httpServer;
};

export const sendTestRequest = async (
  query: DocumentNode,
  {
    variables = {},
    headers = {},
  }: {
    variables?: any;
    headers?: { [key: string]: string; };
  } = {}
): Promise<any> => {

  const server = cachedServer ?? (await createServer());
  cachedServer = server;

  console.log(headers);
  const requestBuilder = request(server).post("/graphql");

  Object.entries(headers).forEach(([key, value]) => {
    requestBuilder.set(key, value);
  });
  const { text } = await requestBuilder.send({
    variables,
    query: print(query)
  });

  return JSON.parse(text);
};