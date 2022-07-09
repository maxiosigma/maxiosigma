module.exports = {
  semi: false,
  tabWidth: 2,
  useTabs: true,
  printWidth: 180,
  singleQuote: true,
  proseWrap: "preserve",
  insertSpaces: false,

  bracketSpacing: true,
  bracketSameLine: true,
  jsxBracketSameLine: true,

  htmlWhitespaceSensitivity: "strict",
  vueIndentScriptAndStyle: true,

  trailingComma: "es5",
  arrowParens: "always",
  embeddedLanguageFormatting: "auto",

  overrides: [
    {
      files: ["*.html", "*.vue"],
      options: {
        printWidth: 135,
      },
    },
    {
      files: ["*.js"],
      options: {
        semi: false,
        printWidth: 300,
        proseWrap: "preserve",
        insertSpaces: false,
        bracketSpacing: true,
        bracketSameLine: true,
        jsxBracketSameLine: true,
      },
    },
  ],
};
