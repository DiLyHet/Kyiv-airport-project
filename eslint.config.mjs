import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [
      "build/",
      "node_modules/",
      "webpack.config.js",
      "styles.d.ts",
      "images.d.ts",
      "components.d.ts",
      "tsconfig.json"
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2021,
        sourceType: "module"
      }
    },
    rules: {
      "import/extensions": 0,
      "no-console": 0,
      "no-alert": 0,
      "no-unused-vars": 0,
      "react/prop-types": 0,
      "import/no-unresolved": 0,
      "global-require": 0,
      "class-methods-use-this": 0,
      "import/no-extraneous-dependencies": 0,
      "arrow-body-style": 0,
      "prefer-arrow-callback": 1,
      "linebreak-style": "off",
      "no-confusing-arrow": 0,
      "arrow-parens": 0,
      "prefer-template": 0,
      "prefer-destructuring": 0,
      "object-curly-newline": 0,
      "object-shorthand": 0,
      "no-else-return": 0,
      "consistent-return": 0,
      "no-shadow": 0,
      "implicit-arrow-linebreak": 0,
      "function-paren-newline": 0,
      "operator-linebreak": 0,
      '@typescript-eslint/no-var-requires': 0,
      "no-explicit-any": 0,
      "react/no-unescaped-entities": 0
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "src/"]
        }
      },
      react: {
        version: "detect"
      }
    }
  },
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
