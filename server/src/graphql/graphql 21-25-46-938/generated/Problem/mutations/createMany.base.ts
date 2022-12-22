export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyProblemMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Problem'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.ProblemCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.problem.create({ data }))),
  }),
);

export const createManyProblemMutation = defineMutation((t) => ({
  createManyProblem: t.prismaField(createManyProblemMutationObject(t)),
}));
