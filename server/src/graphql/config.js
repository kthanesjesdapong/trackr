// ./pothos.config.js

/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
    inputs: {
        outputFilePath: './src/graphql/__generated__/inputs.ts',
    },
    crud: {
        outputDir: './src/graphql/__generated__/',
        inputsImporter: `export * as Inputs from '@graphql/__generated__/inputs';`,
        resolversImports: `import prisma from '@lib/prisma';`,
        prismaCaller: 'prisma',
    },
    global: {
        builderImporter: `import { builder } from '@graphql/builder';`,
    },
};