import { builder } from "../../builder";
import * as Inputs from '../../inputs';

// export const ProblemAttempts

export const ProblemAttempt = builder.prismaNode('ProblemAttempt', {
  id: { field: 'id' },
  fields: (t) => ({
    frontendId: t.exposeInt('frontendId'),
    createdAt: t.expose('createdAt', {
      type: Inputs.DateTime
    }),
    //Connect ID of the problem you are querying for
    problemId: t.relation('problem'),
    //Connect attemptDetailId
    attemptDetailId: t.relation('problemAttemptDetail')
  })
});