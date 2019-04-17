module.exports = {
    testEnvironment: 'node',
    collectCoverageFrom: [
        'api/**/*.js',
        '!api/server.js',
        '!api/config.js',
        '!node_modules/**',
        '!coverage/**'
    ],
    moduleNameMapper: {
        '^test/(.*)': '<rootDir>/test/$1',
        '^app$': '<rootDir>/api/app'
    },
    globalSetup: '<rootDir>/test/setup.js',
    snapshotSerializers: [ 'jest-serializer-html' ]
};
