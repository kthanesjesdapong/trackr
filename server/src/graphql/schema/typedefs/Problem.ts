import { builder } from "../builder";


//Defining what data is exposed through our API
export const Problem = builder.prismaNode("Problem", {
  id: { resolve: (problem) => problem.id },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    title: t.exposeString('title'),
    titleSlug: t.exposeString('titleSlug'),
    difficulty: t.exposeString('difficulty'),
    acRate: t.exposeFloat('acRate'),
    status: t.exposeString('status'),
    topics: t.relatedConnection('topics', {
      cursor: 'id',
      args: { topicId: t.arg.intList() },
      query: (args, context) => ({
        orderBy: {
          id: 'desc'
        }
      }),
    })
  })
});