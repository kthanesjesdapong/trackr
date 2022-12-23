import express from 'express';
import 'dotenv/config';
import logger from '../utils/logger';
import config from "config";
import routes from '../routes/index';

const app = express();
const SEED_PORT = config.get<number>('SEED_PORT');

const seedServer = async () => {
  app.listen(SEED_PORT, async () => {
    logger.info('Line 13, seedServer Func, seedServer/');
    routes(app);
  });
};

app.use(express.json());

seedServer();