//Import schema
import '../../../../../graphql/schema/index';
import { execute } from 'graphql';
import { gql } from 'graphql-tag';
import pothosMock from '../../../../__mocks__/pothosMock';
import prismaMock from '../../../../__mocks__/prismaMock';
import { builder } from '../../../../../graphql/schema/builder';


describe('mock', () => {
  it('queries all problems', async () => {
    const mockedSchema = await builder.toSchema({
      mocks: {
        User: {
          id: () => prismaMock.user.findMany
          // id: () =>
          // title: () => 
        }
      }
    });

    const query = gql`
    mutation {
      createUser(id: "kavin1234567"){
        id
      }
    }`;

    const result = await execute({
      schema: mockedSchema,
      document: query,
      contextValue: {}
    });

    expect(result).toMatchSnapshot();
    // const user = await prismaMock.user.create({
    //   data: {
    //     id: 'kavin1234567',
    //     registeredAt: new Date()
    //   }
    // });


  });
});


