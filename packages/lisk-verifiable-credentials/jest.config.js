const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  automock: false,
  testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFiles: ['<rootDir>/test/setup/mocks.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/_setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
    '^.+\\.[t|j]sx?$': 'babel-jest',
    'node_modules/key-did-provider-ed25519/.+\\.(j|t)s?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!key-did-provider-ed25519/.*)'],
  verbose: false,
  collectCoverage: false,
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'cobertura'],
  coverageDirectory: '.coverage',
  preset: 'ts-jest',
  /**
   * restoreMocks [boolean]
   *
   * Default: false
   *
   * Automatically restore mock state between every test.
   * Equivalent to calling jest.restoreAllMocks() between each test.
   * This will lead to any mocks having their fake implementations removed
   * and restores their initial implementation.
   */
  restoreMocks: true,
  resetMocks: true,

  /**
   * resetModules [boolean]
   *
   * Default: false
   *
   * By default, each test file gets its own independent module registry.
   * Enabling resetModules goes a step further and resets the module registry before running each individual test.
   * This is useful to isolate modules for every test so that local module state doesn't conflict between tests.
   * This can be done programmatically using jest.resetModules().
   */
  resetModules: true,
};

module.exports = config;
