export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttemptDetails',
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttemptDetails.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneProblemAttemptDetailsMutation = defineMutation((t) => ({
  deleteOneProblemAttemptDetails: t.prismaField(deleteOneProblemAttemptDetailsMutationObject(t)),
}));
