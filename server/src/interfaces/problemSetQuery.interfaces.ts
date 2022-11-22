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
  name: string;
  id: string;
  titleSlug: string;
}

//Interface of ProblemData added to dynamoDB
export interface ProblemDataResponse {
  acRate: number;
  difficulty: string;
  frontendQuestionId: string;
  isFavor: boolean;
  paidOnly: boolean;
  status: string;
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