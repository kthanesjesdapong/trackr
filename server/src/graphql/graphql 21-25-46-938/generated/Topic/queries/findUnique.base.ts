export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueTopicQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Topic',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TopicWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topic.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueTopicQuery = defineQuery((t) => ({
  findUniqueTopic: t.prismaField(findUniqueTopicQueryObject(t)),
}));
