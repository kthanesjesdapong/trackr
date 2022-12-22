export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneTopicMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Topic',
    nullable: false,
    args: { data: t.arg({ type: Inputs.TopicCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topic.create({ data: args.data, ...query }),
  }),
);

export const createOneTopicMutation = defineMutation((t) => ({
  createOneTopic: t.prismaField(createOneTopicMutationObject(t)),
}));
