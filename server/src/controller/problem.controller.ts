import { NextFunction, Request, Response } from 'express';
import { getProblems } from '@service/problem.service';
import { client } from '@utils/gqlClient';
import problemSetQuery from '@constants/problemSetList';


const variables = {
  categorySlug: "algorithms",
  limit: 10,
  skip: "0",
  filters: {
  }
};



//This handler is only to initially fetch to leetcodeGQL in order to seed our database
export async function getProblemSetHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const problemData = await getProblems(client, problemSetQuery, variables);
    res.json(problemData);
  } catch (e: any) {
    console.log(e);
  }
};

