export * as Inputs from '@graphql/generated/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const TopicOnProblemsObject = definePrismaObject('TopicOnProblems', {
  description: undefined,
  findUnique: (fields) => ({ problemId_topicId: fields }),
  fields: (t) => ({
    problem: t.relation('problem', TopicOnProblemsProblemFieldObject),
    topic: t.relation('topic', TopicOnProblemsTopicFieldObject),
    problemId: t.exposeInt('problemId', TopicOnProblemsProblemIdFieldObject),
    topicId: t.exposeInt('topicId', TopicOnProblemsTopicIdFieldObject),
    topicSlug: t.exposeString('topicSlug', TopicOnProblemsTopicSlugFieldObject),
    topicName: t.exposeString('topicName', TopicOnProblemsTopicNameFieldObject),
  }),
});

export const TopicOnProblemsProblemFieldObject = defineRelationObject('TopicOnProblems', 'problem', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const TopicOnProblemsTopicFieldObject = defineRelationObject('TopicOnProblems', 'topic', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const TopicOnProblemsProblemIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const TopicOnProblemsTopicIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const TopicOnProblemsTopicSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const TopicOnProblemsTopicNameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});
