export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countTopicOnProblemsQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicOnProblemsWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.TopicOnProblemsOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.TopicOnProblemsScalarFieldEnum], required: false }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.topicOnProblems.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countTopicOnProblemsQuery = defineQuery((t) => ({
  countTopicOnProblems: t.field(countTopicOnProblemsQueryObject(t)),
}));
