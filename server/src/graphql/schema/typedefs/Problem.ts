import { builder } from "../builder";
import { TopicOnProblems } from '@prisma/client';
// import { Topic } from "@prisma/client";
//Defining what data is exposed through our API

export const TopicOnProblemsRef = builder.objectRef('TopicOnProblems');
TopicOnProblemsRef.implement;

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
  //Only works for Implicit M-N Tables So far
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
