module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    clearMocks: true,
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/__mocks__/prismaMock.ts'],
    moduleDirectories: ['node_modules', 'src'],
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/src/__tests__/__mocks__/']
};