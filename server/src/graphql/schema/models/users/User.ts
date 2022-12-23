import { builder } from "../../builder";
import * as Inputs from '../../inputs/index';

//using prismaObject and not node because we do not need to paginate users. 
export const User = builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    //Defined Date type within builder.ts
    registeredAt: t.expose('registeredAt', {
      type: Inputs.DateTime
    }),
    //Table does not exist yet, and does not have any data within it.
    // problemAttempts: t.relation('problemAttempts')
  })
});