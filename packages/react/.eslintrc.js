module.exports = {
  root: true,
  extends: ["@myds/eslint-config/react-internal.js"],
  ignorePatterns: ["dist/", "node_modules/", ".next/", "coverage/"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
