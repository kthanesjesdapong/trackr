export * as Inputs from '@graphql/generated/inputs';
import { BatchPayload } from '../../objects';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyProblemMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problem.deleteMany({ where: args.where }),
  }),
);

export const deleteManyProblemMutation = defineMutation((t) => ({
  deleteManyProblem: t.field(deleteManyProblemMutationObject(t)),
}));
