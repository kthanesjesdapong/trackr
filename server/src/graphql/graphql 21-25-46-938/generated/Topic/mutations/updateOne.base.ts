export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneTopicMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Topic',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.TopicWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.TopicUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topic.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneTopicMutation = defineMutation((t) => ({
  updateOneTopic: t.prismaField(updateOneTopicMutationObject(t)),
}));
