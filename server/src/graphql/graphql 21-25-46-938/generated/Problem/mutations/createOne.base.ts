export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneProblemMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Problem',
    nullable: false,
    args: { data: t.arg({ type: Inputs.ProblemCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.problem.create({ data: args.data, ...query }),
  }),
);

export const createOneProblemMutation = defineMutation((t) => ({
  createOneProblem: t.prismaField(createOneProblemMutationObject(t)),
}));
