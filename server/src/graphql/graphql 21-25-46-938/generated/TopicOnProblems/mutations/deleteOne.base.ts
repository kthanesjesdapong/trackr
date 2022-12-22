export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'TopicOnProblems',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topicOnProblems.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneTopicOnProblemsMutation = defineMutation((t) => ({
  deleteOneTopicOnProblems: t.prismaField(deleteOneTopicOnProblemsMutationObject(t)),
}));
