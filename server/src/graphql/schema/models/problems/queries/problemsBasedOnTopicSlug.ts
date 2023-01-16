import { builder } from '@graphql/schema/builder';
import { Problem } from '@prisma/client';

builder.queryField('problemsBasedOnTopicSlug', (t) => t.prismaConnection({
  type: "Problem",
  cursor: 'id',
  args: {
    id: t.arg.id({ required: false }),
    topicSlug: t.arg.stringList({ required: true })
  },
  defaultSize: 20,
  resolve: async (query, parent, args, context, info): Promise<Problem[]> => {
    const problemBasedOnTopicSlug = await context.prisma.problem.findMany({
      ...query,
      orderBy: [{
        id: 'asc'
      }],
      where: {
        topics: {
          some: {
            topicSlug: {
              in: args.topicSlug
            }
          }
        }
      },
      include: { topics: true }
    });
    return problemBasedOnTopicSlug;
  },
}));