module.exports = {
  extends: [
    "plugin:react/recommended",
    "prettier/react",
    "plugin:jsx-a11y/strict",
  ],

  plugins: ["react", "jsx-a11y"],
  rules: {
    "jsx-a11y/label-has-for": "off", // deprecated
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
      },
    ],
    "jsx-a11y/anchor-has-content": [
      "error",
      {
        components: ["Link"],
      },
    ],
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
};
