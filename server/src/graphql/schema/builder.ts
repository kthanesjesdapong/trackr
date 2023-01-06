import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from '../../prisma/prismaClient';
import { IContext } from '../../interfaces/IContext';
import { Prisma } from '.prisma/client';
import { Scalars } from 'prisma-generator-pothos-codegen';

//Setting up genereric for custom scalars
export const builder = new SchemaBuilder<{
  Context: IContext,
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>;
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf
  }
});

// Sometimes Prisma Types aren't generated properly when, so you may need to remove node modules and do a clean yarn install

//Also run yarn generate and yarn migration

// Re inputting Prisma Types will sometimes fix the issue.



// The order of the Plugins is important

//init queryType
builder.queryType({});

//init mutationType
builder.mutationType({});

//gQL doesnt have DATE type.
// builder.addScalarType("Date", DateResolver, {});
