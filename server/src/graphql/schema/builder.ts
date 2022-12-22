import SchemaBuilder from '@pothos/core';
import { DateResolver } from 'graphql-scalars';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { prisma } from '../../prisma/client';
import { IPrismaContext } from '../../prisma/IPrismaContext';


//Setting up genereric for custom scalars
export const builder = new SchemaBuilder<{
  Context: IPrismaContext,
  Scalars: {
    Date: { Input: Date; Output: Date; },
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  prisma: {
    client: prisma,
  }
});

//init queryType
builder.queryType({});

//init 
builder.mutationType({});

//gQL doesnt have DATE type.
builder.addScalarType("Date", DateResolver, {});
