module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@stylistic", "react", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0, maxBOF: 0}],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "allowImportExportEverywhere": 0,
    "react/prop-types": "off",
    "@stylistic/semi": ["error", "always"]
  },
}
