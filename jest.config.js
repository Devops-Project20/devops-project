module.exports = {
    testEnvironment: "node", // Suitable for testing Node.js modules
    testMatch: ["**/test/**/*.test.js"], // Ensure it points to the `test` folder
    moduleFileExtensions: ["js", "json"], // File extensions Jest should handle
    collectCoverage: true, // Enable code coverage collection
    coverageDirectory: "coverage", // Save coverage reports in the `coverage` folder
    testPathIgnorePatterns: ["<rootDir>/test/ResourceUtil.test.js"], // Ignore specific test file
  };
  