export * as Inputs from '@graphql/generated/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const ProblemAttemptDetailsObject = definePrismaObject('ProblemAttemptDetails', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', ProblemAttemptDetailsIdFieldObject),
    user: t.relation('user', ProblemAttemptDetailsUserFieldObject),
    userId: t.exposeString('userId', ProblemAttemptDetailsUserIdFieldObject),
    ProblemAttempt: t.relation('ProblemAttempt', ProblemAttemptDetailsProblemAttemptFieldObject),
    status: t.exposeString('status', ProblemAttemptDetailsStatusFieldObject),
    createdAt: t.field(ProblemAttemptDetailsCreatedAtFieldObject),
  }),
});

export const ProblemAttemptDetailsIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const ProblemAttemptDetailsUserFieldObject = defineRelationObject('ProblemAttemptDetails', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const ProblemAttemptDetailsUserIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const ProblemAttemptDetailsProblemAttemptFieldObject = defineRelationObject('ProblemAttemptDetails', 'ProblemAttempt', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const ProblemAttemptDetailsStatusFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const ProblemAttemptDetailsCreatedAtFieldObject = defineFieldObject('ProblemAttemptDetails', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});
