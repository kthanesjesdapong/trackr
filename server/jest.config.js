module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    //Anytime Jest coverage is ran, where to output coverage information
    coverageDirectory: 'coverage',

    //Array of glob patterns indicating a set of files for which coverage info should be collected
    //src/**/ *.{js,ts}
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    // collectCoverageFrom: ['src/graphql/schema/']
    // If we're using absolute import paths we can turn this config on

    // moduleNameMapper: {
    //     //literally "'src/", anything
    //     //literally "'<rootDir>/src/index", anything, literally "ts'"
    // This is telling the module mapper that if we're using absolute imports, how to resolve it
    //     'src/(.*)': '<rootDir>/src/index.ts'
    // },
    // resolver: undefined,


    // setupFilesAfterEnv: ['<rootDir>/src/__tests__/__mocks__/prismaMock.ts'],

    moduleDirectories: ['node_modules', 'src'],

    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/src/__tests__/__mocks__/']
};