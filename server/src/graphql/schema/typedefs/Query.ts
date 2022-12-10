import { builder } from "../builder";
import { prisma } from '../../../prisma/client';
import PothosSchemaTypes from '@pothos/core';

//Root Query
const DEFAULT_PAGE_SIZE = 10;
//Adding Field to Query type
//First Arg is the Name of of field
builder.queryField("problemsBasedOnTopicIds", (t) => t.prismaField({
  // to get a list of Problems wrap it in an []
  type: ['Problem'],
  nullable: true,
  //Pass required:true to args
  args: {
    topicId: t.arg.intList({ required: true }),
    take: t.arg.int({ required: false }),
    cursor: t.arg.int({ required: false })
  },
  //prisma query obj thats provided to us, that is pass downed into our prisma queries based on gql req
  resolve: async (query, root, args, ctx, info) => {
    return prisma.problem.findMany({
      ...query,
      orderBy: [{
        id: 'asc'
      }],
      where: {
        topics: {
          some: {
            id: {
              in: args.topicId
            }
          }
        }
      },
      include: { topics: true }
    });
  }
}));



const problemBasedOnTopics = async (args: PothosSchemaTypes.ArgFieldOptions): Promise<void> => {

};