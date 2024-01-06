module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['node_modules', 'src/main.jsx'],
  moduleFileExtensions: ['js', 'jsx']
};
