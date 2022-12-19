import { builder } from "../builder";
import { prisma } from '../../../prisma/client';
import { Problem } from "./Problem";


builder.queryField('problems', (t) => t.prismaConnection({
  type: Problem,
  cursor: 'id',
  defaultSize: 50,
  resolve: (query, parent, args, context, info) => prisma.problem.findMany({
    ...query,
    orderBy: [{
      id: 'asc'
    }],
    include: { topics: true }
  }),
}));


//Call this when initially fetching all problems.
//Default page size is 10, and it uses cursor pagination
//When a user clicks on topics, topics will send topic.topicSlug || topic.topicName and query based off of that
//Connects Problems to Problems Nodes -> Edges


// builder.queryField('problemsBasedOnTopicSlug', (t) => t.prismaConnection({
//   type: Problem,
//   cursor: 'id',
//   args: {
//     id: t.arg.id({ required: false }),
//     topicSlug: t.arg.stringList({ required: true })
//   },
//   defaultSize: 10,
//   resolve: (query, parent, args, context, info) => prisma.problem.findMany({
//     ...query,
//     orderBy: [{
//       id: 'asc'
//     }],
//     where: {
//       topics: {
//         some: {
//           topicSlug: {
//             in: args.topicSlug
//           }
//         }
//       }
//     },
//     include: { topics: true }
//   }),
// }));





//Queries based off of difficulty


// builder.queryField('problemsOnDifficulty', (t) => t.prismaConnection({
//   type: Problem,
//   cursor: 'id',
//   args: {
//     diffuculty: t.arg.string({ required: true })
//   },
//   defaultSize: 10,
//   resolve: (query, parent, args, context, info) => prisma.problem.findMany({
//     ...query,
//     orderBy: [{
//       id: 'asc'
//     }],
//     where: {
//       difficulty: args.diffuculty
//     },
//     include: { topics: true }
//   }),
// }));

//Could directly change Prisma -> Topic OutPut Type directly to allow for null fields in where { difficulty?}
//trying to figure out how to query based on one field


//Queries based off of searchKeyWords -> 