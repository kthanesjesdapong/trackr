import { PrismaClient } from '@prisma/client';
import config from 'config';
import logger from '../logger';

export const prisma = new PrismaClient();

async function connect() {
  //queries go here
  // const allProblems = await prisma.topic.findMany();
  // console.log(allProblems);
  try {
    logger.info('DB is connected');
  } catch (error: any) {
    logger.error('Could not connect to DB');
    process.exit(1);
  }
}

connect()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default connect;