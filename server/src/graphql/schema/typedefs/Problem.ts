import { builder } from "../builder";


//Defining what data is exposed through our API
export const Problem = builder.prismaObject("Problem", {
  fields: (t) => ({
    id: t.exposeInt('id'),
    title: t.exposeString('title'),
    titleSlug: t.exposeString('titleSlug'),
    difficulty: t.exposeString('difficulty'),
    acRate: t.exposeFloat('acRate'),
    status: t.exposeString('status'),
    topics: t.relation('topics', {
      args: { topicId: t.arg.intList() },
      query: (args, context) => ({
        orderBy: {
          id: 'desc'
        }
      }),
    }),
  })
});