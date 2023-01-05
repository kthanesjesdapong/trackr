import { builder } from '../../../builder';


builder.mutationField('createOneProblemAttempt', (t) => t.prismaField({
  type: 'ProblemAttempt',
  args: {

    problemId: t.arg.int({ required: true }),
    userId: t.arg.string({ required: true }),
    status: t.arg.string({ required: true })
  },
  resolve: async (query, root, args, context, info) => context.prisma.problemAttempt.create({
    ...query,
    data: {
      problem: {
        connect: {
          id: args.problemId
        }
      },
      problemAttemptDetail: {
        create: {
          user: {
            connect: {
              id: args.userId
            }
          },
          status: args.status
        }
      }
    }
  })
}));
