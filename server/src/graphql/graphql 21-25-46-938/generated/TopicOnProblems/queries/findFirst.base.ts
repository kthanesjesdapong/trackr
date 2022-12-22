export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstTopicOnProblemsQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'TopicOnProblems',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.TopicOnProblemsWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.TopicOnProblemsOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.TopicOnProblemsScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topicOnProblems.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstTopicOnProblemsQuery = defineQuery((t) => ({
  findFirstTopicOnProblems: t.prismaField(findFirstTopicOnProblemsQueryObject(t)),
}));
