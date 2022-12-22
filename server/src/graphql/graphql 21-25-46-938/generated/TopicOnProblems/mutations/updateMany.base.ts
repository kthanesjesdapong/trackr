export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyTopicOnProblemsMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicOnProblemsWhereInput, required: false }),
      data: t.arg({ type: Inputs.TopicOnProblemsUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.topicOnProblems.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyTopicOnProblemsMutation = defineMutation((t) => ({
  updateManyTopicOnProblems: t.field(updateManyTopicOnProblemsMutationObject(t)),
}));
