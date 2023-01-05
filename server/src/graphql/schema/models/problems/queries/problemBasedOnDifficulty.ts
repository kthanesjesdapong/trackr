import { builder } from "../../../builder";
import { Problem } from '@prisma/client';

builder.queryField('problemsOnDifficulty', (t) => t.prismaConnection({
  type: "Problem",
  cursor: 'id',
  args: {
    difficulty: t.arg.string({ required: true })
  },
  defaultSize: 20,
  resolve: (query, parent, args, context, info): Promise<Problem[]> => context.prisma.problem.findMany({
    ...query,
    orderBy: [{
      id: 'asc'
    }],
    where: {
      difficulty: args.difficulty
    },
    include: { topics: true }
  }),
}));