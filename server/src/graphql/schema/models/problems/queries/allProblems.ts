import { Problem } from "@prisma/client";
import { builder } from "../../../builder";


//FieldBuilder
builder.queryField('allProblems', (t) => t.prismaConnection({
  type: 'Problem',
  cursor: 'id',
  defaultSize: 50,
  resolve: (query, parent, args, context, info): Promise<Problem[]> => context.prisma.problem.findMany({
    ...query,
    orderBy: [{
      id: 'asc'
    }],
    include: { topics: true }
  }),
}));
