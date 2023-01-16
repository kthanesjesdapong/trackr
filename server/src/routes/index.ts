import { Express } from 'express';
import { getProblemSetHandler } from '@controller/problem.controller';



//Call your Handler || Controller
export default function routes(app: Express) {
  //Mounting endpoint for LeetCode API Req
  app.get('/', getProblemSetHandler);
}