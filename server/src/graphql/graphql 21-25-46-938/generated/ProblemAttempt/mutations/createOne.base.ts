export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'ProblemAttempt',
    nullable: false,
    args: { data: t.arg({ type: Inputs.ProblemAttemptCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problemAttempt.create({ data: args.data, ...query }),
  }),
);

export const createOneProblemAttemptMutation = defineMutation((t) => ({
  createOneProblemAttempt: t.prismaField(createOneProblemAttemptMutationObject(t)),
}));
