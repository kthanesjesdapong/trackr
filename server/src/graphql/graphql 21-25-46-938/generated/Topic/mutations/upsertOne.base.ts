export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneTopicMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Topic',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.TopicCreateInput, required: true }),
      update: t.arg({ type: Inputs.TopicUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topic.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneTopicMutation = defineMutation((t) => ({
  upsertOneTopic: t.prismaField(upsertOneTopicMutationObject(t)),
}));
