import { PrismaClient } from '@prisma/client';
import { prisma } from './client';
import { IPrismaContext } from '../interfaces/IPrismaContext';


const prismaContext: IPrismaContext = {
  prisma
};

export default prismaContext;