export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttemptDetails',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.ProblemAttemptDetailsCreateInput, required: true }),
      update: t.arg({ type: Inputs.ProblemAttemptDetailsUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttemptDetails.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneProblemAttemptDetailsMutation = defineMutation((t) => ({
  upsertOneProblemAttemptDetails: t.prismaField(upsertOneProblemAttemptDetailsMutationObject(t)),
}));
