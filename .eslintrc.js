module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-empty": "error",
        "no-irregular-whitespace": [
            "error",
            {
                "skipStrings": true,
                "skipComments": true,
                "skipTemplates": true,
                "skipRegExps": true
            }
        ],
        "no-undef": "warn",
        "space-infix-ops": [
            2, {"int32Hint": false}
            ],
        "no-console": "off",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "curly": "error",
        "no-empty-function": "off",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-self-assign": "error",
        "no-useless-return": "error",
        "no-useless-escape":"off",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "array-bracket-spacing": [
            "error", "never"
        ],
        "brace-style": "error",
        "comma-dangle": [
            "error", "never"
        ],
        "comma-style": [
            "error", "last"
        ],
        "func-call-spacing": [
            "error", "never"
        ],
        "jsx-quotes": [
            "error", "prefer-double"
        ],
        "key-spacing": [
            "error", { "afterColon": true }
            ],
        "keyword-spacing": [
            "error", { "before": true }
            ],
        "max-depth": [
            "error", 4
        ],
        "max-len": [
            "error", { "code": 280 }
            ],
        "max-params": [
            "error", 6
        ],
        "max-statements-per-line": [
            "error", { "max": 2 }
            ],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": [
            "error", {
            "max": 1, "maxEOF": 1, "maxBOF": 1}
        ],
        "no-constant-condition": "warn",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error", "never"
        ],
        "space-in-parens": [
            "error", "never"
        ],
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "template-tag-spacing": [
            "error", "always"
        ],
        "arrow-spacing": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-extra-boolean-cast": "off"
    }
};
