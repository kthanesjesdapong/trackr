export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyProblemAttemptDetailsMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['ProblemAttemptDetails'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.ProblemAttemptDetailsCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.problemAttemptDetails.create({ data }))),
  }),
);

export const createManyProblemAttemptDetailsMutation = defineMutation((t) => ({
  createManyProblemAttemptDetails: t.prismaField(createManyProblemAttemptDetailsMutationObject(t)),
}));
