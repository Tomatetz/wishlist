module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/setupJest.js"],
  moduleNameMapper: {
    "^@Api/(.*)$": "<rootDir>/src/api/$1",
    "^@Context/(.*)$": "<rootDir>/src/context/$1",
    "^@Assets/(.*)$": "<rootDir>/src/assets/$1",
    "\\.(css|sass|scss)$": "identity-obj-proxy",
    // "\\.svg$": "<rootDir>/jest-svg-transformer.js",
  },
  transform: {
    "^.+\\.svg$": "<rootDir>/jest-svg-transformer.js",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
