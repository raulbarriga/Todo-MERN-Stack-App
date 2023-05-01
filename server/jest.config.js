export default {
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
    moduleFileExtensions: ["js", "json", "node"],
    roots: ["../server"],
    transform: {
      "^.+\\.js?$": "babel-jest"
    },
    testTimeout: 10000,
    verbose: true,
    maxWorkers: 1
  };
  