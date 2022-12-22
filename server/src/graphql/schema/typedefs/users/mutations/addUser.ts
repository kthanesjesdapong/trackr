import { prisma } from '../../../../../prisma/client';
import { query } from 'express';
import { builder } from '../../../builder';
import { User } from '../User';
import { expressMiddleware } from '@apollo/server/dist/esm/express4';
import { PrismaClient } from '@prisma/client';

// builder.mutationField('user', (t) => t.prismaConnection({
//   // type: User,
// }));

// builder.mutationField('user', (t) => t.prismaField({
//   type: User,
//   nullable: false,
//   args: {
//     id: t.arg.string({ required: true })
//   }
// }));




// builder.mutationField('user', (t) => t.prismaField({
//   type: User,
//   args: { id: t.arg.string({ required: true }) },
//   resolve: async (query, root, args, context, info) => {
//     context.user.create;
//   }

// }));







/*
  resolve: async (query, root, args, ctx, info) => prisma.user.create({
    data: {
      id: args.id,
      ...query
    }
  })



{
  const created = await context.prisma.user.create({
    data: {
      id: args.id,
      ...query
    }
  })
  return created
}

*/