const path = require("path");

module.exports = {
  extends: ["@myds/eslint-config/react-internal.js"],
  ignorePatterns: [
    "dist/",
    "node_modules/",
    ".next/",
    "coverage/",
    "tsup.config.ts",
  ],
  // To fix the issue where the tsconfig is being looked at the root directory
  // https://github.com/microsoft/vscode-eslint/issues/1170
  parserOptions: {
    project: path.resolve(__dirname, "tsconfig.json"),
  },
};
