export * as Inputs from '@graphql/generated/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserObject = definePrismaObject('User', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', UserIdFieldObject),
    registeredAt: t.field(UserRegisteredAtFieldObject),
    problemAttempts: t.relation('problemAttempts', UserProblemAttemptsFieldObject(t)),
  }),
});

export const UserIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserRegisteredAtFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.registeredAt,
});

export const UserProblemAttemptsFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'problemAttempts', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.ProblemAttemptDetailsWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.ProblemAttemptDetailsOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.ProblemAttemptDetailsWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.ProblemAttemptDetailsScalarFieldEnum], required: false }),
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
