import { builder } from '../../../builder';
import { User } from '@prisma/client';




export const createOneUser = builder.mutationField('createUser', (t) => t.prismaField({
  type: 'User',
  args: { id: t.arg.string({ required: true }) },
  resolve: async (query, root, args, context, info): Promise<User> => {
    const createdUser = await context.prisma.user.create({
      data: {
        id: args.id
      },
      ...query
    });
    return createdUser;
  }
}));