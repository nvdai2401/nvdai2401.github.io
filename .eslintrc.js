module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": ["prettier", "eslint:recommended", "plugin:react/recommended"],
  "plugins": ["prettier", "react"],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
      "prettier/prettier": [
          "error",
          {
              "printWidth": 80,
              "trailingComma": "es5",
              "semi": false,
              "jsxSingleQuote": true,
              "singleQuote": true,
              "useTabs": true
          }
      ]
  }
}
