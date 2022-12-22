export * as Inputs from '@graphql/generated/inputs';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyProblemAttemptDetailsQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['ProblemAttemptDetails'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.ProblemAttemptDetailsOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.ProblemAttemptDetailsWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.ProblemAttemptDetailsScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttemptDetails.findMany({
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

export const findManyProblemAttemptDetailsQuery = defineQuery((t) => ({
  findManyProblemAttemptDetails: t.prismaField(findManyProblemAttemptDetailsQueryObject(t)),
}));
