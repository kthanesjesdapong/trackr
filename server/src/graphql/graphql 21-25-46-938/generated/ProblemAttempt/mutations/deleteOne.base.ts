export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttempt',
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttempt.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneProblemAttemptMutation = defineMutation((t) => ({
  deleteOneProblemAttempt: t.prismaField(deleteOneProblemAttemptMutationObject(t)),
}));
