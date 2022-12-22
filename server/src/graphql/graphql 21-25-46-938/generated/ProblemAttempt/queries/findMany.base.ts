export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyProblemAttemptQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['ProblemAttempt'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.ProblemAttemptOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.ProblemAttemptScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttempt.findMany({
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

export const findManyProblemAttemptQuery = defineQuery((t) => ({
  findManyProblemAttempt: t.prismaField(findManyProblemAttemptQueryObject(t)),
}));
