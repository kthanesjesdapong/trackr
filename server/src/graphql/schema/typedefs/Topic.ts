import { builder } from "../builder";

builder.prismaObject("Topic", {
  fields: (t) => ({
    id: t.exposeInt('id'),
    topicSlug: t.exposeString('topicSlug'),
    topicname: t.exposeString('topicName'),
    problems: t.relation('problems'),
  })
});
export const schema = builder.toSchema({});