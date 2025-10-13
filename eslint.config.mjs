import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		languageOptions: {
			parser: typescriptEslintParser,
		},
		plugins: {
			import: importPlugin,
			"react-hooks": reactHooksPlugin,
		},
		settings: {
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
			},
		},
		rules: {
			quotes: [2, "double", { avoidEscape: true }],
			indent: ["error", "tab", { SwitchCase: 1 }],
			semi: ["error", "always"],
			"linebreak-style": ["error", "unix"],
			"no-unused-vars": ["error", { vars: "all", args: "none" }],
			"import/order": 2,
			"no-tabs": 0,
			"no-useless-constructor": "error",
			"no-undefined": "warn",
			"react/prop-types": 0,
			"react-hooks/rules-of-hooks": "warn",
			"react-hooks/exhaustive-deps": "warn",
		},
	},
	{
		ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "database.types.ts"],
	},
];

export default eslintConfig;
