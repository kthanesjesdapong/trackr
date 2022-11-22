import { Express, Request, Response } from 'express';
import { getProblemSetHandler } from '../controller/problem.controller';



//Call your Handler || Controller
export default function routes(app: Express) {
  // Test Route
  app.get('/', (req, res) => {
    res.send('whats up');
  });
  //Initial Fetch of all problems to seed to db
  app.get('/problem', getProblemSetHandler);

}