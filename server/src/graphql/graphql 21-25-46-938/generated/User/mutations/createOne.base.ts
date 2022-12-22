export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneUserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'User',
    nullable: false,
    args: { data: t.arg({ type: Inputs.UserCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.user.create({ data: args.data, ...query }),
  }),
);

export const createOneUserMutation = defineMutation((t) => ({
  createOneUser: t.prismaField(createOneUserMutationObject(t)),
}));
