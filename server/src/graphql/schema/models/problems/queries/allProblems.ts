// import { Problem } from "@prisma/client";
import { builder } from "../../../builder";

//: Promise<Problem[]>

//FieldBuilder
builder.queryField('allProblems', (t) => t.prismaConnection({
  type: 'Problem',
  cursor: 'id',
  defaultSize: 50,
  resolve: async (query, parent, args, context, info) => {
    const allProblems = await context.prisma.problem.findMany({
      ...query,
      orderBy: [{
        id: 'asc'
      }],
      include: { topics: true }
    });
    return allProblems;
  },
}));
