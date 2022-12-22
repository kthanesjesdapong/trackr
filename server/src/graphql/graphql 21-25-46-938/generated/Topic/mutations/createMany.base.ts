export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyTopicMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Topic'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.TopicCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.topic.create({ data }))),
  }),
);

export const createManyTopicMutation = defineMutation((t) => ({
  createManyTopic: t.prismaField(createManyTopicMutationObject(t)),
}));
