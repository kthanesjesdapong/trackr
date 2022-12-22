export * as Inputs from '@graphql/generated/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const ProblemObject = definePrismaObject('Problem', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', ProblemIdFieldObject),
    frontendId: t.exposeInt('frontendId', ProblemFrontendIdFieldObject),
    title: t.exposeString('title', ProblemTitleFieldObject),
    titleSlug: t.exposeString('titleSlug', ProblemTitleSlugFieldObject),
    difficulty: t.exposeString('difficulty', ProblemDifficultyFieldObject),
    acRate: t.exposeFloat('acRate', ProblemAcRateFieldObject),
    topics: t.relation('topics', ProblemTopicsFieldObject(t)),
    topicTags: t.field(ProblemTopicTagsFieldObject),
    problemAttempts: t.relation('problemAttempts', ProblemProblemAttemptsFieldObject(t)),
  }),
});

export const ProblemIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const ProblemFrontendIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const ProblemTitleFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const ProblemTitleSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const ProblemDifficultyFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const ProblemAcRateFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const ProblemTopicsFieldObject = defineRelationFunction('Problem', (t) =>
  defineRelationObject('Problem', 'topics', {
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

export const ProblemTopicTagsFieldObject = defineFieldObject('Problem', {
  type: Inputs.Json,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.topicTags,
});

export const ProblemProblemAttemptsFieldObject = defineRelationFunction('Problem', (t) =>
  defineRelationObject('Problem', 'problemAttempts', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.ProblemAttemptOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.ProblemAttemptWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.ProblemAttemptScalarFieldEnum], required: false }),
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
