export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttempt',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.ProblemAttemptCreateInput, required: true }),
      update: t.arg({ type: Inputs.ProblemAttemptUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttempt.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneProblemAttemptMutation = defineMutation((t) => ({
  upsertOneProblemAttempt: t.prismaField(upsertOneProblemAttemptMutationObject(t)),
}));
