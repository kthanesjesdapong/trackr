import { Request } from 'express';
import { ProblemSetVariable, ProblemList, ProblemDataResponse } from "../interfaces/problemSetQuery.interfaces";
import config from 'config';



const TABLE_NAME = config.get<string>('TABLE_NAME');

//This is where the work is executed
//Business logic lives in service
export async function getProblems(client: any, query: String, problemSetVariable: ProblemSetVariable) {
  //pass in the req.body once you have a forum component
  const problemSet = await client.request(query, problemSetVariable);
  return problemSet;
}

//Takes in a problem and adds it to table
const addOrUpdateProblems = async (problemDataResponse: ProblemDataResponse) => {
  const params = {
    TableName: TABLE_NAME,
    Item: problemDataResponse
  };
  //wait to connect DB first
  //return await dynamoClient.put(params).promise()
}

