import { builder } from "../../../builder";
import { Problem } from "../Problem";

builder.queryField('problemsBasedOnTopicSlug', (t) => t.prismaConnection({
  type: Problem,
  cursor: 'id',
  args: {
    id: t.arg.id({ required: false }),
    topicSlug: t.arg.stringList({ required: true })
  },
  defaultSize: 20,
  resolve: (query, parent, args, context, info) => context.prisma.problem.findMany({
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
  }),
}));