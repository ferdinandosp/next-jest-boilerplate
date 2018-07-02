module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    "^.+\\.scss$": '<rootDir>/node_modules/jest-css-modules',
    "^.+\\.jsx?$": "babel-jest"
  }
}