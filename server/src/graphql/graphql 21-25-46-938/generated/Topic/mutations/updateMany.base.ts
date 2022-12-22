export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyTopicMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicWhereInput, required: false }),
      data: t.arg({ type: Inputs.TopicUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.topic.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyTopicMutation = defineMutation((t) => ({
  updateManyTopic: t.field(updateManyTopicMutationObject(t)),
}));
