export * as Inputs from '@graphql/generated/inputs';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneUserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'User',
    nullable: true,
    args: { where: t.arg({ type: Inputs.UserWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.user.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneUserMutation = defineMutation((t) => ({
  deleteOneUser: t.prismaField(deleteOneUserMutationObject(t)),
}));
