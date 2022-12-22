export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptWhereInput, required: false }),
      data: t.arg({ type: Inputs.ProblemAttemptUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problemAttempt.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyProblemAttemptMutation = defineMutation((t) => ({
  updateManyProblemAttempt: t.field(updateManyProblemAttemptMutationObject(t)),
}));
