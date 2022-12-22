export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstTopicQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Topic',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.TopicWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.TopicOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.TopicWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.TopicScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topic.findFirst({
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

export const findFirstTopicQuery = defineQuery((t) => ({
  findFirstTopic: t.prismaField(findFirstTopicQueryObject(t)),
}));
