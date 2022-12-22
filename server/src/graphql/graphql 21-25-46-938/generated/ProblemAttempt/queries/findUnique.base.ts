export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueProblemAttemptQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'ProblemAttempt',
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttempt.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueProblemAttemptQuery = defineQuery((t) => ({
  findUniqueProblemAttempt: t.prismaField(findUniqueProblemAttemptQueryObject(t)),
}));
