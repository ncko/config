module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "prefer-const": "error",
    "no-var": "error",
    "arrow-spacing": "error",
    "arrow-parens": ["error", "always"],
    "key-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": "error",
    curly: "error",
    "newline-before-return": "error",
    "no-trailing-spaces": "error",
    "eol-last": "error",
    "keyword-spacing": "error",
    strict: ["error", "never"],
    "no-console": "error",
    "space-before-blocks": "error",
  },
  env: {
    jest: true,
    node: true,
  },
};
