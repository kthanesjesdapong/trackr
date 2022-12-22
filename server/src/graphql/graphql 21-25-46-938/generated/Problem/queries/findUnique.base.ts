export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueProblemQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Problem',
    nullable: true,
    args: { where: t.arg({ type: Inputs.ProblemWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problem.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueProblemQuery = defineQuery((t) => ({
  findUniqueProblem: t.prismaField(findUniqueProblemQueryObject(t)),
}));
