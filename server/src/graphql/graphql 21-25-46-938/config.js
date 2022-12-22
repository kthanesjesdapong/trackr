// ./pothos.config.js

/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
    inputs: {
        outputFilePath: './src/graphql/generated/inputs.ts',
    },
    crud: {
        outputDir: './src/graphql/generated/',
        inputsImporter: `export * as Inputs from '@graphql/generated/inputs';`,
        resolversImports: `import prisma from '@lib/prisma';`,
        prismaCaller: 'prisma',
    },
    global: {
        builderImporter: `import { builder } from '@graphql/builder';`,
    },
};