import { Express, Request, Response } from 'express';
import { getProblemSetHandler } from '../controller/problem.controller';



//Call your Handler || Controller
export default function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('whats up');
  });
  app.get('/problem', getProblemSetHandler);

}