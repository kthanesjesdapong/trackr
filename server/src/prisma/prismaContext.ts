import { IPrismaContext } from '../interfaces/IPrismaContext';
import { prisma } from './prismaClient';

//provides context of prismaClient
const prismaContext: IPrismaContext = {
  prisma
};

export default prismaContext;