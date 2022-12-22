export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneProblemMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Problem',
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problem.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneProblemMutation = defineMutation((t) => ({
  deleteOneProblem: t.prismaField(deleteOneProblemMutationObject(t)),
}));
