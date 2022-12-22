export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueTopicOnProblemsQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'TopicOnProblems',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topicOnProblems.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueTopicOnProblemsQuery = defineQuery((t) => ({
  findUniqueTopicOnProblems: t.prismaField(findUniqueTopicOnProblemsQueryObject(t)),
}));
