import { builder } from "../../builder";

//using prismaObject and not node because we do not need to paginate users. 
export const User = builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    //Defined Date type within builder.ts
    registeredAt: t.expose('registeredAt', {
      type: "Date"
    }),
    //Table does not exist yet, and does not have any data within it.
    problemAttempts: t.relation('problemAttempts')
  })
});