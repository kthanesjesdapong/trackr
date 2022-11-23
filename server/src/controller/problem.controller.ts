import { NextFunction, Request, Response } from 'express';
import { getProblems } from '../service/problem.service';
import { client } from '../utils/gqlClient';
import problemSetQuery from '../constants/problemSetList';

const variables = {
  categorySlug: "algorithms",
  limit: 20,
  skip: "0",
  filters: {
  }
};


//Controller Manages the work || Controller calls your service
export async function getProblemSetHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const problemData = await getProblems(client, problemSetQuery, variables);
    res.json(problemData);
  } catch (e: any) {
    console.log(e);
  }
};

