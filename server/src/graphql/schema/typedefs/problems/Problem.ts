import { builder } from "../../builder";

// export const TopicOnProblemsRef = builder.objectRef('TopicOnProblems');
// TopicOnProblemsRef.implement;

export const Problem = builder.prismaNode('Problem', {
  id: { field: 'id' },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    frontendId: t.exposeInt('frontendId'),
    title: t.exposeString('title'),
    titleSlug: t.exposeString('titleSlug'),
    difficulty: t.exposeString('difficulty'),
    acRate: t.exposeFloat('acRate'),
    //Connects topics -> topics as nodes
    topics: t.relatedConnection('topics', {
      cursor: 'problemId_topicId',
      args: { problemId_topicId: t.arg.intList() },
    }),
  })
  /*
  //Implicit Table relatedConnection
  topics: t.relatedConnection('topics', {
    cursor: 'id',
    args: { topicId: t.arg.intList() },
    query: (args, context) => ({
      orderBy: {
        id: 'desc'
      }
    }),
  })
  */
});
