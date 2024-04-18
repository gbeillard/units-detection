module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "models/(.*)": "<rootDir>/src/models/$1",
    "services/(.*)": "<rootDir>/src/services/$1",
    "@shared/(.*)": "<rootDir>/../shared/$1",
  },
};