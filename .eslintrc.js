module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    'space-before-function-paren': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  },
};
