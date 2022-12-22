export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttemptDetails',
    nullable: false,
    args: { data: t.arg({ type: Inputs.ProblemAttemptDetailsCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttemptDetails.create({ data: args.data, ...query }),
  }),
);

export const createOneProblemAttemptDetailsMutation = defineMutation((t) => ({
  createOneProblemAttemptDetails: t.prismaField(createOneProblemAttemptDetailsMutationObject(t)),
}));
