export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemAttemptWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problemAttempt.deleteMany({ where: args.where }),
  }),
);

export const deleteManyProblemAttemptMutation = defineMutation((t) => ({
  deleteManyProblemAttempt: t.field(deleteManyProblemAttemptMutationObject(t)),
}));
