export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereInput, required: false }),
      data: t.arg({ type: Inputs.ProblemAttemptDetailsUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problemAttemptDetails.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyProblemAttemptDetailsMutation = defineMutation((t) => ({
  updateManyProblemAttemptDetails: t.field(updateManyProblemAttemptDetailsMutationObject(t)),
}));
