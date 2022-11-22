import { Request } from 'express';
import { ProblemSetVariable, ProblemList, ProblemDataResponse } from "../interfaces/problemSetQuery.interfaces";
import { ddbDocClient } from '../utils/ddbDocClient';
import { DynamoDBDocumentClient, PutCommand, PutCommandOutput } from '@aws-sdk/lib-dynamodb';



//This is where the work is executed
//Business logic lives in service
export async function getProblems(client: any, query: String, problemSetVariable: ProblemSetVariable): Promise<ProblemList | undefined> {
  //pass in the req.body once you have a forum component
  try {
    const problemSet = await client.request(query, problemSetVariable);
    return problemSet;
  } catch (e: any) {
    console.log(e.err);
  }
}


//Takes response from LeetCode GQL API and seeds response
export const addOrUpdateProblem = async (problemDataResponse: ProblemDataResponse, ddbDocClient: DynamoDBDocumentClient, tableName: string): Promise<PutCommandOutput | undefined> => {
  const params = {
    TableName: tableName,
    Item: problemDataResponse
  };
  try {
    const addedProblemData = await ddbDocClient.send(new PutCommand(params));
    console.log(addedProblemData, 'line 31 problem service');
    return addedProblemData;
  } catch (e: any) {
    console.log(e);
  }
}

