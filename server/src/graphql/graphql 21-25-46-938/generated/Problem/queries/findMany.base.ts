export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyProblemQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Problem'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.ProblemOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.ProblemWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.ProblemScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problem.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyProblemQuery = defineQuery((t) => ({
  findManyProblem: t.prismaField(findManyProblemQueryObject(t)),
}));
