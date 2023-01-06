import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { app } from "../../../../../../config/apolloServerConfig";
import { schema } from "../../../../../../graphql/schema/schema";
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { prisma } from '../../../../../../prisma/prismaClient';
import cors from 'cors';
import { IContext } from '../../../../../../interfaces/IContext';
import { userPoolsClient } from "../../../../../../utils/cognitoClient";


//Run mutation against ApolloServer
// const CREATE_USER_MUTATION = gql`
// mutation Mutation($createUserId: String!) {
//   createUser(id: $createUserId) {
//     id
//   }
// }
// `;


const PROBLEM = gql`
query Problems {
  allProblems {
    edges {
      cursor
      node {
        acRate
        difficulty
        frontendId
        id
        title
        titleSlug
        topics {
          edges {
            node {
              problemId
              topicId
              topicName
              topicSlug
            }
          }
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}`;


//Pivot to using an HTTP client to query against server.


describe('tests', () => {
  //create apolloServer instance - to execute mutations against
  let tServer: ApolloServer<IContext>;



  beforeAll(async () => {

    //   //start the server
    tServer = new ApolloServer<IContext>({
      schema,
      includeStacktraceInErrorResponses: true,
    });
    // await tServer.start();

    //apply middlewares 
    // app.use(
    //   '/',
    //   cors<cors.CorsRequest>(),
    //   bodyParser.json(),
    //   expressMiddleware(tServer, {
    //     context: async () => ({
    //       prisma: prisma,
    //       cognito: userPoolsClient
    //     }),
    //   }),
    // );

  });

  // afterAll(async () => {
  //   // httpServer.close();
  // });

  it('should create a user', async () => {
    const userId: string = 'Kavin01/04/2023 - 7:26PM';


    const response = await tServer.executeOperation({
      query: PROBLEM,
      variables: {}
    });

    console.log(response);
    expect(response.body.kind === 'single');
    expect(response.body).toMatchSnapshot();
    // console.log('LINE 45 TESTSERVER', testServer);
    return response;


  });
});
