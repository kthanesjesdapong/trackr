import { builder } from '@graphql/schema/builder';
import { Problem } from '@prisma/client';

builder.queryField('problemsOnDifficulty', (t) => t.prismaConnection({
  type: "Problem",
  cursor: 'id',
  args: {
    difficulty: t.arg.string({ required: true })
  },
  defaultSize: 20,
  resolve: async (query, parent, args, context, info): Promise<Problem[]> => {
    const problemBasedOnDifficulty = await context.prisma.problem.findMany({
      ...query,
      orderBy: [{
        id: 'asc'
      }],
      where: {
        difficulty: args.difficulty
      },
      include: { topics: true }
    });
    return problemBasedOnDifficulty;
  },
}));