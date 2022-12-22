export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countProblemAttemptQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.ProblemAttemptOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.ProblemAttemptScalarFieldEnum], required: false }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.problemAttempt.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countProblemAttemptQuery = defineQuery((t) => ({
  countProblemAttempt: t.field(countProblemAttemptQueryObject(t)),
}));
