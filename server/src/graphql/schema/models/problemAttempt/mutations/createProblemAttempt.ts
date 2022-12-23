import { builder } from '../../../builder';
import { ProblemAttemptCreateInput } from '../../../inputs/index';


builder.mutationField('createOneProblemAttempt', (t) => t.prismaField({
  type: 'ProblemAttempt',
  args: {
    data: t.arg({ type: ProblemAttemptCreateInput, required: true })
  },
  resolve: async (query, root, args, context, info) => {
    const createdProblemAttempt = await context.prisma.problemAttempt.create({
      data: args.data,
      ...query
    });
    return createdProblemAttempt;
  }
}));








/*

InputRef for args field, then use that to build the type of input 

t.arg.Problem.id

//create InputRef for args field. 
1.create a problemAttempt,
connect it with a problem through a problem Id, (this will be the id of the problem the user works on in prod)

// this is a nested create, so create problem attemptDetail and then connect the current problemAttempt with the attemptDetailId
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
    status: args.status
  }
}



}

create the attemptDetailId, and then connect the newly created attemptDetailid to problemAttempt


create type for createProblemAttemptInput

*/