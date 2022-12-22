export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'TopicOnProblems',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.TopicOnProblemsCreateInput, required: true }),
      update: t.arg({ type: Inputs.TopicOnProblemsUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topicOnProblems.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneTopicOnProblemsMutation = defineMutation((t) => ({
  upsertOneTopicOnProblems: t.prismaField(upsertOneTopicOnProblemsMutationObject(t)),
}));
