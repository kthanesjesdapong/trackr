export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttemptDetails',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.ProblemAttemptDetailsUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttemptDetails.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneProblemAttemptDetailsMutation = defineMutation((t) => ({
  updateOneProblemAttemptDetails: t.prismaField(updateOneProblemAttemptDetailsMutationObject(t)),
}));
