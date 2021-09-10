module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node":true,
  },
  extends: [
    'prettier',
    'airbnb',

  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    ["prettier"],
  ],
  rules: {
    "prettier/prettier": ["error"]

  },
};
