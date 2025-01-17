import typeScriptParser from "@typescript-eslint/parser";
export default [
  {
    languageOptions: {
      parser: typeScriptParser,
    },
    rules: {
      "no-console": "error",
      "no-unused-vars": "warn",
    },
    files: ["**/*.ts", "**/*.tsx", "**/*.js"],
  },
];
