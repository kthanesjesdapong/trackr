export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'TopicOnProblems',
    nullable: false,
    args: { data: t.arg({ type: Inputs.TopicOnProblemsCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.topicOnProblems.create({ data: args.data, ...query }),
  }),
);

export const createOneTopicOnProblemsMutation = defineMutation((t) => ({
  createOneTopicOnProblems: t.prismaField(createOneTopicOnProblemsMutationObject(t)),
}));
