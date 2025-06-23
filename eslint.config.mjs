import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintComments from "eslint-plugin-eslint-comments";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eslintRecommended = js.configs.recommended;

const typescriptEslintConfig = {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },
    rules: {
        ...typescriptEslint.configs["strict"].rules,
        ...typescriptEslint.configs["strict-type-checked"].rules,
        ...typescriptEslint.configs["stylistic-type-checked"].rules,
        ...typescriptEslint.configs.recommended.rules,
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow",
                filter: {
                    regex: "^(window|data-testid)$",
                    match: false,
                },
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
                filter: {
                    regex: "^(window)$",
                    match: false,
                },
            },
            {
                selector: "enumMember",
                format: ["UPPER_CASE"],
            },
        ],
    },
};

const eslintCommentsConfig = {
    plugins: {
        "eslint-comments": eslintComments,
    },
    rules: {
        ...eslintComments.configs.recommended.rules,
    },
};

const prettierConfig = {
    plugins: {
        prettier,
    },
    rules: {
        "prettier/prettier": "error",
    },
};

const reactHooksConfig = {
    plugins: {
        "react-hooks": reactHooks,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        "react-hooks/exhaustive-deps": ["error"],
        "react-hooks/rules-of-hooks": ["error"],
    },
};

const reactConfig = {
    plugins: {
        react,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
        "react/display-name": "off",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-curly-brace-presence": [
            "error",
            {
                props: "never",
                children: "ignore",
            },
        ],
        "react/jsx-fragments": ["error", "syntax"],
        "react/jsx-no-target-blank": "off",
        "react/no-unescaped-entities": ["off"],
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-no-useless-fragment": [
            "error",
            {
                allowExpressions: true,
            },
        ],
    },
};

const reactRefreshConfig = {
    plugins: {
        "react-refresh": reactRefresh,
    },
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            {
                allowConstantExport: true,
            },
        ],
    },
};

const unicornConfig = {
    plugins: {
        unicorn,
    },
    rules: {
        ...unicorn.configs.recommended.rules,
        "unicorn/prevent-abbreviations": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-null": "off",
        "unicorn/prefer-module": "off",
        "unicorn/prefer-node-protocol": "off",
        "unicorn/no-array-push-push": "off",
        "unicorn/no-extra-boolean-cast": "off",
        "unicorn/explicit-length-check": "off",
        "unicorn/prefer-dom-node-text-content": "off",
        "unicorn/prefer-object-from-entries": "off",
        "unicorn/expiring-todo-comments": "off",
        "unicorn/switch-case-braces": "off",
        "unicorn/no-static-only-class": "off",
        "unicorn/filename-case": "off",
        "unicorn/numeric-separators-style": [
            "error",
            {
                number: {
                    minimumDigits: 0,
                    groupLength: 3,
                },
            },
        ],
    },
};

const importConfig = {
    plugins: {
        "simple-import-sort": simpleImportSort,
    },
    rules: {
        "simple-import-sort/imports": [
            "error",
            {
                groups: [
                    // Pure re-exports (commonly found in barrel files)
                    ["^export .*"],
                    // React comes first, external packages and then design system imports
                    ["^react$", String.raw`^@?\w`, "^@rewardsweb"],
                    // Internal packages
                    [String.raw`^(module|router|types|type|utils|background|common|content|popup|service|test|provider|/)(\/)?`],
                    // Store imports
                    ["^store/"],
                    // Assets imports
                    ["^assets/"],
                    // Parent imports. Put `..` last.
                    [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
                    // Other relative imports. Put same-folder imports and `.` last.
                    [String.raw`^\./(?=.*/)(?!/?$)`, String.raw`^\.(?!/?$)`, String.raw`^\./?$`],
                    // Style imports.
                    [String.raw`^.+\.s?css$`],
                ],
            },
        ],
        "simple-import-sort/exports": "off",
        "sort-imports": "off",
    },
};

const commonJsRules = {
    "no-async-promise-executor": "off",
    "arrow-body-style": "off",
    eqeqeq: ["error", "smart"],
    "no-console": [
        "error",
        {
            allow: ["info"],
        },
    ],
    "no-duplicate-imports": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "no-fallthrough": "off",
    "object-shorthand": ["error"],
    "prefer-const": [
        "error",
        {
            ignoreReadBeforeAssign: true,
        },
    ],
    "prefer-arrow-callback": "off",
    "require-yield": "off",
    "no-else-return": ["error"],
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-restricted-globals": "off",
    "consistent-return": [
        "error",
        {
            treatUndefinedAsUnspecified: true,
        },
    ],
    "no-promise-executor-return": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "prefer-promise-reject-errors": "off",
    "no-param-reassign": "off",
    "lines-between-class-members": [
        "warn",
        "always",
        {
            exceptAfterSingleLine: true,
        },
    ],
    radix: ["error", "as-needed"],
};

export default [
    {
        ignores: ["**/dist", "**/.eslintrc.cjs", "**/coverage", "**/scripts", "eslint.config.mjs"],
    },

    {
        files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
        ...eslintRecommended,
        rules: {
            ...commonJsRules,
        },
    },

    // TypeScript specific config
    {
        files: ["**/*.{ts,tsx}"],
        ...typescriptEslintConfig,
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ["./tsconfig.json", "./tsconfig.node.json"],
                tsconfigRootDir: __dirname,
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
            },
        },
    },

    // Apply other configs
    eslintCommentsConfig,
    prettierConfig,
    reactHooksConfig,
    reactConfig,
    reactRefreshConfig,
    unicornConfig,
    importConfig,

    // Service files override
    {
        files: ["**/service/**.ts"],
        rules: {
            "@typescript-eslint/no-extraneous-class": "off",
        },
    },

    // Test files override
    {
        files: ["**/**{spec,test,handler}**", "**/test/**"],
        rules: {
            "unicorn/no-empty-file": "off",
            "react-refresh/only-export-components": "off",
        },
    },
];
