import { gql } from "graphql-tag";
import { sendTestRequest } from "./testUtils";


it("Fetches All Problems", async () => {
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


  const response = await sendTestRequest(PROBLEM);
  expect(response.data).toMatchSnapshot();
  console.log(response);
});