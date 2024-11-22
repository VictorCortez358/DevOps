module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest"
    },
    testMatch: ['**/*.test.js'],
    transformIgnorePatterns: ['/node_modules/'],
  };