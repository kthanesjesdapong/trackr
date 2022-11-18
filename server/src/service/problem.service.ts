import { Request } from 'express';
import { problemSetVariable } from "../interfaces/problemSetQuery.interfaces";


//This is where the work is executed
//Business logic lives in service
export async function getProblems(client: any, query: String, problemSetVariable: problemSetVariable) {
  //pass in the req.body once you have a forum component
  const problemSet = await client.request(query, problemSetVariable);
  return problemSet;
}

