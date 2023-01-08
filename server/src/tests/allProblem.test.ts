import { gql } from "graphql-tag";
import { sendTestRequest } from "./testUtils"; // Make sure this points to the file we created earlier!

it("Example", async () => {
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

  console.log('hello');
  const response = await sendTestRequest(PROBLEM);
  expect(response).toMatchSnapshot();
  console.log(response);
  // expect(response).toEqual({
  //   data: {
  //     __typename: "Query",
  //   },
  // });
});