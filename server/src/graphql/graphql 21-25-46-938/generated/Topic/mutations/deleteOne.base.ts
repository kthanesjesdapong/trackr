export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneTopicMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Topic',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TopicWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topic.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneTopicMutation = defineMutation((t) => ({
  deleteOneTopic: t.prismaField(deleteOneTopicMutationObject(t)),
}));
