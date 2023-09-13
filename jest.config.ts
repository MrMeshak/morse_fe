import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'node',
  setupFiles: [],
  verbose: true,
};

export default config;
