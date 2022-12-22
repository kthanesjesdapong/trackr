export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttempt',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.ProblemAttemptUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttempt.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneProblemAttemptMutation = defineMutation((t) => ({
  updateOneProblemAttempt: t.prismaField(updateOneProblemAttemptMutationObject(t)),
}));
