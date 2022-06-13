module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "react-app",
        "react-app/jest",
    ],
    rules: {
        quotes: [
            "warn",
            "double",
        ],
        "prefer-const": [
            "warn",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: false,
            },
        ],
        "quote-props": [
            "warn",
            "as-needed",
        ],
        "comma-dangle": [
            "warn",
            "always-multiline",
        ],
        "no-sequences": 0,
        "react-hooks/exhaustive-deps": 0,
        "arrow-parens": [
            "warn",
        ],
        "object-curly-spacing": [
            "warn",
            "always",
        ],
    },
};
