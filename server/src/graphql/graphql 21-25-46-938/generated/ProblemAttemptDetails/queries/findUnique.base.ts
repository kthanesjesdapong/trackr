export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueProblemAttemptDetailsQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'ProblemAttemptDetails',
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttemptDetails.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueProblemAttemptDetailsQuery = defineQuery((t) => ({
  findUniqueProblemAttemptDetails: t.prismaField(findUniqueProblemAttemptDetailsQueryObject(t)),
}));
