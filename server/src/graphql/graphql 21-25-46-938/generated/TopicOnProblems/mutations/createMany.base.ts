export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['TopicOnProblems'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.TopicOnProblemsCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.topicOnProblems.create({ data }))),
  }),
);

export const createManyTopicOnProblemsMutation = defineMutation((t) => ({
  createManyTopicOnProblems: t.prismaField(createManyTopicOnProblemsMutationObject(t)),
}));
