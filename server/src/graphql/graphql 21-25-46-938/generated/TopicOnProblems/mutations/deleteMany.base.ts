export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.TopicOnProblemsWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.topicOnProblems.deleteMany({ where: args.where }),
  }),
);

export const deleteManyTopicOnProblemsMutation = defineMutation((t) => ({
  deleteManyTopicOnProblems: t.field(deleteManyTopicOnProblemsMutationObject(t)),
}));
