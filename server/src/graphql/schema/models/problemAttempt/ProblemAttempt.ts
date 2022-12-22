import { builder } from "../../builder";


// export const ProblemAttempts

export const ProblemAttempt = builder.prismaNode('ProblemAttempt', {
  id: { field: 'id' },
  fields: (t) => ({
    frontendId: t.exposeInt('frontendId'),
    createdAt: t.expose('createdAt', {
      type: 'Date'
    }),
    //Connect ID of the problem you are querying for
    problemId: t.relation('problem'),
    //Connect attemptDetailId
    attemptDetailId: t.relation('problemAttemptDetail')
  })
});