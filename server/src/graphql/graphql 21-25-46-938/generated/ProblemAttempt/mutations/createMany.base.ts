export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyProblemAttemptMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['ProblemAttempt'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.ProblemAttemptCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.problemAttempt.create({ data }))),
  }),
);

export const createManyProblemAttemptMutation = defineMutation((t) => ({
  createManyProblemAttempt: t.prismaField(createManyProblemAttemptMutationObject(t)),
}));
