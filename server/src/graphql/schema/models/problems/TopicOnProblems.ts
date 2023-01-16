import { builder } from '@graphql/schema/builder';

export const TopicOnProblems = builder.prismaNode('TopicOnProblems', {
  id: { field: 'problemId_topicId' },
  fields: (t) => ({
    problemId: t.exposeInt('problemId'),
    topicId: t.exposeInt('topicId'),
    topicSlug: t.exposeString('topicSlug'),
    topicName: t.exposeString('topicName')
  })
});