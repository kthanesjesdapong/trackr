export * from './Problem';
export * from './Topic';
export * from './TopicOnProblems';
export * from './User';
export * from './ProblemAttempt';
export * from './ProblemAttemptDetails';

import { builder } from '@graphql/builder';
import { Prisma } from '.prisma/client';

export const BatchPayload = builder.objectType(builder.objectRef<Prisma.BatchPayload>('BatchPayload'), {
  description: 'Batch payloads from prisma.',
  fields: (t) => ({
    count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
  }),
});

export const modelNames = [
  'Problem',
  'Topic',
  'TopicOnProblems',
  'User',
  'ProblemAttempt',
  'ProblemAttemptDetails',
] as const;

export type Model = typeof modelNames[number];
