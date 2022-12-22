import { builder } from "../../builder";


export const ProblemAttemptDetails = builder.prismaNode('ProblemAttemptDetails', {
  id: { field: 'id' },
  fields: (t) => ({
    userId: t.relation('user'),
    //problemAttemptId - will give you the id of attempted problem
    status: t.exposeString('status'),
    createdAt: t.expose('createdAt', {
      type: 'Date'
    })
  })
});