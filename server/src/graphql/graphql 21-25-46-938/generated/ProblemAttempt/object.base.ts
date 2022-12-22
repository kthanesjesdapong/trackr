export * as Inputs from '@graphql/generated/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const ProblemAttemptObject = definePrismaObject('ProblemAttempt', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', ProblemAttemptIdFieldObject),
    createdAt: t.field(ProblemAttemptCreatedAtFieldObject),
    frontendId: t.exposeInt('frontendId', ProblemAttemptFrontendIdFieldObject),
    problem: t.relation('problem', ProblemAttemptProblemFieldObject),
    problemId: t.exposeInt('problemId', ProblemAttemptProblemIdFieldObject),
    problemAttemptDetail: t.relation('problemAttemptDetail', ProblemAttemptProblemAttemptDetailFieldObject),
    attemptDetailId: t.exposeInt('attemptDetailId', ProblemAttemptAttemptDetailIdFieldObject),
  }),
});

export const ProblemAttemptIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const ProblemAttemptCreatedAtFieldObject = defineFieldObject('ProblemAttempt', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const ProblemAttemptFrontendIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const ProblemAttemptProblemFieldObject = defineRelationObject('ProblemAttempt', 'problem', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const ProblemAttemptProblemIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const ProblemAttemptProblemAttemptDetailFieldObject = defineRelationObject('ProblemAttempt', 'problemAttemptDetail', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const ProblemAttemptAttemptDetailIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});
