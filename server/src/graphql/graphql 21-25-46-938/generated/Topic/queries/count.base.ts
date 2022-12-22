export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countTopicQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.TopicOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.TopicWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.TopicScalarFieldEnum], required: false }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.topic.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countTopicQuery = defineQuery((t) => ({
  countTopic: t.field(countTopicQueryObject(t)),
}));
