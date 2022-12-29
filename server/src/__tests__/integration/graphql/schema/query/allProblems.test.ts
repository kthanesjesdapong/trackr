//Import schema
import '../../../../../graphql/schema/index';
import { execute } from 'graphql';
import { gql } from 'graphql-tag';
import pothosMock from '../../../../__mocks__/pothosMock';
import prismaMock from '../../../../__mocks__/prismaMock';
import { builder } from '../../../../../graphql/schema/builder';
import { request } from 'graphql-request';
import { schema } from '../../../../../graphql/schema/schema';
import { prisma } from '@prisma/client';


test('should return all problems with the title', async () => {
  const query = `
  query{
    allProblems {
      edges {
        node {
          title
        }
      }
    }
  }`;
  const expectedResult = await prismaMock.user.findMany;

  const { data } = await request("http://localhost:8080/graphql", query);
  expect(data).toEqual(expectedResult);
});


// describe('Query', () => {
//   it('query Problems based On Difficulty ', async () => {
//     const mockedSchema = builder.toSchema({
//       mocks: {
//         Problem: {
//           difficulty: () => 'EASY'
//         }
//       }
//     });

//     const query = gql`
//     query {
//       allProblems {
//         edges {
//           node {
//             title
//           }
//         }
//       }
//     }`;


//     const result = await execute({
//       schema: mockedSchema,
//       document: query,
//       contextValue: {}
//     });

//     expect(result.data).toMatchSnapshot();

//   });
// });


