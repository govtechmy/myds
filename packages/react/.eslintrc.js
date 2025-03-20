module.exports = {
  root: true,
  extends: ["@myds/eslint-config/react-internal.js"],
  ignorePatterns: [
    "dist/",
    "node_modules/",
    ".next/",
    "coverage/",
    "tsup.config.ts",
  ],
};
