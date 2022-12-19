import { builder } from "../builder";


//Defining what data is exposed through our API
export const Problem = builder.prismaNode("Problem", {
  id: { field: 'id' },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    frontendId: t.exposeInt('frontendId'),
    title: t.exposeString('title'),
    titleSlug: t.exposeString('titleSlug'),
    difficulty: t.exposeString('difficulty'),
    acRate: t.exposeFloat('acRate'),
    // topics: t.field({
    //   select: (args, ctx, nestedSelection) => ({})
    // })
    //Connects topics -> topics as nodes
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
  })
});