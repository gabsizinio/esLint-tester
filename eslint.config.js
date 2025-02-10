// eslint.config.js
import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsparser,
            sourceType: "module"
        },
        plugins: {
            "@typescript-eslint": tseslint,
            jsdoc: jsdoc
        },
        rules: {
            // 1️ - Validação de Identificadores (Regex)
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "default",
                    "format": ["camelCase", "PascalCase", "UPPER_CASE"],
                    "leadingUnderscore": "allow",
                    "trailingUnderscore": "allow",
                    "custom": {
                        "regex": "^[\\w]+$",
                        "match": true
                    }
                },
                // 2️ - Convenção de Nomenclatura
                { "selector": "variable", "format": ["camelCase"] },
                { "selector": "function", "format": ["camelCase"] },
                { "selector": "parameter", "format": ["camelCase"] },
                { "selector": "class", "format": ["PascalCase"] },
                { "selector": "interface", "format": ["PascalCase"], "prefix": ["I"] },
                { "selector": "typeAlias", "format": ["PascalCase"] },
                { "selector": "enum", "format": ["PascalCase"] },
                { "selector": "enumMember", "format": ["UPPER_CASE"] },
                { "selector": "property", "format": ["camelCase"], "leadingUnderscore": "allow" },
                { "selector": "method", "format": ["camelCase"] },

                // 3 -Definir constantes globais em UPPER_CASE
                { "selector": "variable", "modifiers": ["const"], "format": ["UPPER_CASE"] },

                // 4 - Proibição do Uso do Caractere "$"
                {
                    "selector": "default",
                    "format": ["camelCase", "PascalCase", "UPPER_CASE"],
                    "custom": {
                        "regex": "^[^$]+$", // Agora corretamente colocado
                        "match": true
                    }
                }
            ],


            "@typescript-eslint/naming-convention": "off",

            // 5️ - Tipagem e Inferência de Tipos
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/explicit-function-return-type": "error",

            // 6️ - Comentários e Documentação
            "jsdoc/check-tag-names": "error",
            "jsdoc/require-jsdoc": [
                "error",
                { "publicOnly": true, "require": { "FunctionDeclaration": true } }
            ]
        }
    }
];
