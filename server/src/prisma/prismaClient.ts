import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger';


export const prisma: PrismaClient = new PrismaClient();


async function connect(): Promise<void> {

  try {
    await prisma.$connect();
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