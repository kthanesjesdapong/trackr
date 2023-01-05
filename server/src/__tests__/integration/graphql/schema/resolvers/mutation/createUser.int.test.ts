import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import apolloServerConfig, { app, httpServer } from "../../../../../../config/apolloServerConfig";
import { schema } from "../../../../../../graphql/schema/schema";
import prismaContext from "../../../../../../prisma/prismaContext";
import { User } from "@prisma/client";
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { prisma } from '../../../../../../prisma/prismaClient';
import cors from 'cors';
import logger from '../../../../../../utils/logger';


//Run mutation against ApolloServer
const CREATE_USER_MUTATION = gql`
mutation Mutation($createUserId: String!) {
  createUser(id: $createUserId) {
    id
  }
}
`;

//Pivot to using an HTTP client to query against server.



// const testServer = async () => {
//   let tServer: ApolloServer;
//   tServer = new ApolloServer({ schema: schema, includeStacktraceInErrorResponses: true });
//   await tServer.start();
//   app.use(
//     '/',
//     cors<cors.CorsRequest>(),
//     bodyParser.json(),
//     // expressMiddleware accepts the same arguments:
//     // an Apollo Server instance and optional configuration options
//     expressMiddleware(tServer, {
//       //Share data throughout your server
//       //With IPrismaContext set as the type for ApolloServer, wrapping () around {} after the arrow works
//       context: async () => ({
//         //Sources for fetching data
//         prisma: prisma
//       }),
//     }),
//   );
//   await new Promise<void>((resolve) => httpServer.listen({
//     port: 8080
//   }, () => {
//     logger.info(`App is running at http://localhost:8080`);
//   }));
// };

/*





*/

describe('tests', () => {
  //create apolloServer instance - to execute mutations against
  let tServer: ApolloServer;


  beforeAll(async () => {
    jest.setTimeout(10 * 1000);
    tServer = new ApolloServer({ schema: schema, includeStacktraceInErrorResponses: true });
    await tServer.start();
    app.use(
      '/',
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      // expressMiddleware accepts the same arguments:
      // an Apollo Server instance and optional configuration options
      expressMiddleware(tServer, {
        //Share data throughout your server
        //With IPrismaContext set as the type for ApolloServer, wrapping () around {} after the arrow works
        context: async () => ({
          //Sources for fetching data
          prisma: prisma
        }),
      }),
    );

  });

  afterAll(async () => {
    httpServer.close();
  });

  it('should create a user', async () => {
    const userId: string = 'Kavin01/04/2023 - 7:26PM';

    console.log(tServer);
    const response = await tServer.executeOperation({
      query: `mutation Mutation($createUserId: String!) {
        createUser(id: $createUserId) {
          id
        }
      }`,
      variables: { createUserId: userId }
    });

    console.log(response);
    expect(response.body.kind === 'single');
    expect(response.body).toMatchSnapshot();
    // console.log('LINE 45 TESTSERVER', testServer);
    return response;


  });
});
