export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyProblemMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemWhereInput, required: false }),
      data: t.arg({ type: Inputs.ProblemUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problem.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyProblemMutation = defineMutation((t) => ({
  updateManyProblem: t.field(updateManyProblemMutationObject(t)),
}));
