export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneProblemMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Problem',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.ProblemCreateInput, required: true }),
      update: t.arg({ type: Inputs.ProblemUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problem.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneProblemMutation = defineMutation((t) => ({
  upsertOneProblem: t.prismaField(upsertOneProblemMutationObject(t)),
}));
