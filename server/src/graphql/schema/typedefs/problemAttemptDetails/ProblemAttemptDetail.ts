import { builder } from "../../builder";


export const ProblemAttemptDetails = builder.prismaNode('ProblemAttemptDetails', {
  id: { field: 'id' },
  fields: (t) => ({
    //userId
    //problemAttemptId
    status: t.exposeString('status'),
    createdAt: t.expose('createdAt', {
      type: 'Date'
    })
  })
});