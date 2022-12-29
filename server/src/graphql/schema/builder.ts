import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from '../../prisma/client';
import { IPrismaContext } from '../../prisma/IPrismaContext';
import { Prisma } from '.prisma/client';
import { Scalars } from 'prisma-generator-pothos-codegen';
import MocksPlugin from '@pothos/plugin-mocks';

// 4:16 PM added Mocks Plugin and imported it

//Setting up genereric for custom scalars
export const builder = new SchemaBuilder<{
  Context: IPrismaContext,
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>;
  PrismaTypes: PrismaTypes;
}>({
  plugins: [MocksPlugin, PrismaPlugin, RelayPlugin],
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf
  }
});





// The order of the Plugins is important

//init queryType
builder.queryType({});

//init mutationType
builder.mutationType({});

//gQL doesnt have DATE type.
// builder.addScalarType("Date", DateResolver, {});
