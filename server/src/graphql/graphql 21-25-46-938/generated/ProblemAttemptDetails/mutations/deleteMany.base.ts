export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problemAttemptDetails.deleteMany({ where: args.where }),
  }),
);

export const deleteManyProblemAttemptDetailsMutation = defineMutation((t) => ({
  deleteManyProblemAttemptDetails: t.field(deleteManyProblemAttemptDetailsMutationObject(t)),
}));
