import { builder } from '@graphql/schema/builder';

export const Topic = builder.prismaObject("Topic", {
  select: {
    id: true
  },
  fields: (t) => ({
    id: t.exposeInt('id'),
    topicSlug: t.exposeString('topicSlug'),
    topicName: t.exposeString('topicName'),
  })
});
