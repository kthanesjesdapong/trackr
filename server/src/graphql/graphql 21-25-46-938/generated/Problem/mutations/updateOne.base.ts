export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneProblemMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Problem',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.ProblemWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.ProblemUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problem.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneProblemMutation = defineMutation((t) => ({
  updateOneProblem: t.prismaField(updateOneProblemMutationObject(t)),
}));
