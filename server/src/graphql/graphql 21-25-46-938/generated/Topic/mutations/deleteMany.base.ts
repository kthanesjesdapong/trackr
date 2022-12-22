export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyTopicMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.TopicWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.topic.deleteMany({ where: args.where }),
  }),
);

export const deleteManyTopicMutation = defineMutation((t) => ({
  deleteManyTopic: t.field(deleteManyTopicMutationObject(t)),
}));
