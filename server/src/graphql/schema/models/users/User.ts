import { builder } from '@graphql/schema/builder';
import * as Inputs from "@graphql/schema/inputs";


//using prismaObject and not node because we do not need to paginate users. 
export const User = builder.prismaObject('User', {
  fields: (t) => ({
    //This is supposed to be email
    id: t.exposeID('id'),
    //Defined Date type within builder.ts
    registeredAt: t.expose('registeredAt', {
      type: Inputs.DateTime
    }),
    //Table does not exist yet, and does not have any data within it.
    // problemAttempts: t.relation('problemAttempts')
  })
});