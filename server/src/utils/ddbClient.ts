import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import config from 'config';
import { fromEnv } from "@aws-sdk/credential-providers";
const AWS_REGION = config.get<string>('AWS_REGION');

//DynamoDB service client object
export const ddbClient = new DynamoDBClient({
  region: AWS_REGION,
  credentials: fromEnv()
});