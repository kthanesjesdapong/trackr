import 'dotenv/config';
import express from 'express';
import logger from './utils/logger';
import config from "config";
import routes from './routes/index';
const app = express();
const port = config.get<number>('port');


//Body parsing middleware
app.use(express.json());




app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  console.log(routes(app), 'line 18 index.ts');
  //Mounting Our Routes
  routes(app);

});