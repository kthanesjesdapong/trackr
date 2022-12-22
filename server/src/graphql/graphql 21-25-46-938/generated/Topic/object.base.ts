export * as Inputs from '@graphql/generated/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const TopicObject = definePrismaObject('Topic', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', TopicIdFieldObject),
    topicSlug: t.exposeString('topicSlug', TopicTopicSlugFieldObject),
    topicName: t.exposeString('topicName', TopicTopicNameFieldObject),
    problems: t.relation('problems', TopicProblemsFieldObject(t)),
  }),
});

export const TopicIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const TopicTopicSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const TopicTopicNameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const TopicProblemsFieldObject = defineRelationFunction('Topic', (t) =>
  defineRelationObject('Topic', 'problems', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TopicOnProblemsWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.TopicOnProblemsOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.TopicOnProblemsWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.TopicOnProblemsScalarFieldEnum], required: false }),
    },
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
