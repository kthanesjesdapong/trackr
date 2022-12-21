import { builder } from "../../../builder";
import { prisma } from '../../../../../prisma/client';
import { Problem } from "../Problem";


builder.queryField('problems', (t) => t.prismaConnection({
  type: Problem,
  cursor: 'id',
  defaultSize: 50,
  resolve: (query, parent, args, context, info) => prisma.problem.findMany({
    ...query,
    orderBy: [{
      id: 'asc'
    }],
    include: { topics: true }
  }),
}));
