import { builder } from '../../../builder';


builder.mutationField('createProblemAttempt', (t) => t.prismaField({
  type: 'ProblemAttempt',
  args: {
    problemId: t.arg.int({ required: true }),
    attemptDetailId: t.arg.int({ required: true })
  },
  resolve: async (query, root, args, context, info) => {
    const createdProblemAttempt = await context.prisma.problemAttempt.create({
      data: {
        problemId: args.problemId,
        attemptDetailId: args.attemptDetailId
      },
      ...query
    });
    return createdProblemAttempt;
  }
}))


/*





*/