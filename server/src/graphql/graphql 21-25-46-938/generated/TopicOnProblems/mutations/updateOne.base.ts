export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'TopicOnProblems',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.TopicOnProblemsUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topicOnProblems.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneTopicOnProblemsMutation = defineMutation((t) => ({
  updateOneTopicOnProblems: t.prismaField(updateOneTopicOnProblemsMutationObject(t)),
}));
