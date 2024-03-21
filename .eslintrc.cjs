/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint-config-codely/typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "import/no-unresolved": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
