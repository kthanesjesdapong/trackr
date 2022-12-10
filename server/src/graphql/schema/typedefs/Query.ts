import { builder } from "../builder";
import { prisma } from '../../../prisma/client';
import { Problem } from "./Problem";


//Root Query
//Adding Field to Query type
//First Arg is the Name of of field
builder.queryField("problemsBasedOnTopicIds", (t) => t.prismaField({
  // to get a list of Problems wrap it in an []
  type: ['Problem'],
  //Pass required:true to args
  args: {
    topicId: t.arg.intList({ required: true }),
    take: t.arg.int({ required: false }),
    cursor: t.arg.int({ required: false })
  },
  nullable: true,
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

//Call this when initially fetching all problems.
//Default page size is 10, and it uses cursor pagination
//When a user clicks on topics, topics will send topic.id || topic.topicName and query based off of that
//Connects Problems to Problems Nodes -> Edges
builder.queryField('problems', (t) => t.prismaConnection({
  type: Problem,
  cursor: 'id',
  args: {
    id: t.arg.id({ required: false }),
    topicSlug: t.arg.stringList({ required: true })
  },
  defaultSize: 10,
  resolve: (query, parent, args, context, info) => prisma.problem.findMany({
    ...query,
    orderBy: [{
      id: 'asc'
    }],
    where: {
      topics: {
        some: {
          topicSlug: {
            in: args.topicSlug
          }
        }
      }
    },
    include: { topics: true }
  }),
}));
