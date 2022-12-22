import { builder } from '../../../builder';
import { Problem } from '../../problems/Problem';
import { ProblemAttemptDetails } from '@prisma/client';

builder.mutationField('createProblemAttempt', (t) => t.prismaField({
  type: 'ProblemAttempt',
  args: {
    problemId: t.arg.int({ required: true }),
    attemptDetailId: t.arg.int({ required: true }),
    userId: t.arg.string({ required: true }),
    status: t.arg.string({ required: true }),
  },
  resolve: async (query, root, args, context, info) => {
    const createdProblemAttempt = await context.prisma.problemAttempt.create({
      data: {
        ...query,
        problemId: args.problemId,
        attemptDetailId: args.attemptDetailId
      },

    });
    return createdProblemAttempt;
  }
}))


/*
t.arg.Problem.id


create a problemAttempt,
connect it with a problem through a problem Id,

create a ProblemAttemptDetail
and then connect it it with the attemptDetailId



problemId: {
  // this is already within our db
  connect: {
    id: 1 // num of problemId you are connecting
  }
},
attemptDetailId:{
  create: {
    userId: 'kavin1'// this is going to be the username of the user
    status: args.status,

  }
}



}

create the attemptDetailId, and then connect the newly created attemptDetailid to problemAttempt


create type for createProblemAttemptInput

*/