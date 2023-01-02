import { ApolloServer } from "@apollo/server";
import { assert } from "console";
import { gql } from "graphql-tag";
import apolloServerConfig from "../../../../../../config/apolloServerConfig";
import { schema } from "../../../../../../graphql/schema/schema";
import prismaContext from "../../../../../../prisma/prismaContext";
import { User } from "@prisma/client";
import { server } from "../../../../../..";

//Run mutation against ApolloServer
const CREATE_USER_MUTATION = gql`
mutation Mutation($createUserId: String!) {
  createUser(id: $createUserId) {
    id
  }
}
`;


/*

mutation Mutation($createUserId: String!) {
  createUser(id: $createUserId) {
    id
  }
}

*/

describe('tests', () => {
  //create apolloServer instance - to execute mutations against
  let testServer: ApolloServer;

  beforeAll(async () => {
    testServer = new ApolloServer({ schema: schema, includeStacktraceInErrorResponses: true });
    await testServer.start();
    await prismaContext.prisma.user.findMany({});
  });

  afterAll(async () => {

    // await prismaContext.prisma.user.findMany({});
    // await prismaContext.prisma.$disconnect();
  });

  it('should create a user', async () => {
    const userId: string = 'kavin12345566';

    const response = await testServer.executeOperation({
      query: CREATE_USER_MUTATION,
      variables: { createUserId: userId }
    });


    console.log(userId);
    console.log('THIS IS THE REPONSE l 43', response.body);
    expect(response.body.kind === 'single');
    expect(response.body).toMatchSnapshot();
    // console.log('LINE 45 TESTSERVER', testServer);
    return response;
  });
});
