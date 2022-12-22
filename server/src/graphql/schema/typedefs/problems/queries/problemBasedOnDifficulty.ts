import { builder } from "../../../builder";
import { Problem } from "../Problem";

builder.queryField('problemsOnDifficulty', (t) => t.prismaConnection({
  type: Problem,
  cursor: 'id',
  args: {
    diffuculty: t.arg.string({ required: true })
  },
  defaultSize: 20,
  resolve: (query, parent, args, context, info) => context.prisma.problem.findMany({
    ...query,
    orderBy: [{
      id: 'asc'
    }],
    where: {
      difficulty: args.diffuculty
    },
    include: { topics: true }
  }),
}));