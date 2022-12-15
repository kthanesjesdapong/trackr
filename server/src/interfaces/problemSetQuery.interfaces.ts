// When making GQL request to leetcode.com./graphql
export interface ProblemSetVariable {
  categorySlug: string;
  limit?: number;
  skip?: string;
  filters?: {
    difficulty?: string;
    searchKeywords?: string;
    tags?: Array<string>;
  };
}
//Array<string> generic typing an array of string || string[]

//Array of Topic tags are returned
interface TopicTags {
  id: string;
  name: string;
  slug: string;
}

//Interface of ProblemData added to dynamoDB
export interface ProblemDataResponse {
  frontendQuestionId: string;
  title: string;
  titleSlug: string;
  difficulty: string;
  acRate: number;
  topicTags: Array<TopicTags>;
}

//Interface of total response from lcGql API call
export interface ProblemList {
  total: number;
  data: Array<ProblemDataResponse>;
}

export interface DynamoDbParams {
  TableName: string;
  Item: ProblemDataResponse;
}