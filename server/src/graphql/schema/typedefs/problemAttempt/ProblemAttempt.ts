import { builder } from "../../builder";


// export const ProblemAttempts

export const ProblemAttempt = builder.prismaNode('ProblemAttempt', {
  id: { field: 'id' },
  fields: (t) => ({
    //backendId: t.expose('backendId'),
    createdAt: t.expose('createdAt', {
      type: 'Date'
    }),
    //problemId - int

    //attemptDetailId
  })
});