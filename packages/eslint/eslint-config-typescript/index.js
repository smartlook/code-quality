module.exports = {
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended', // Disables rules from eslint:recommended which are already handled by TypeScript
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
	],
	rules: {
		/////////////////////
		//  disabled rules //
		/////////////////////

		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off', //non-boolean vars in logic expression are used at many places in code

		////////////////////////////////////////////
		// @typescript-eslint/eslint-plugin rules //
		////////////////////////////////////////////
		'@typescript-eslint/array-type': [
			'warn',
			{
				default: 'array-simple',
				readonly: 'array-simple',
			},
		],
		'@typescript-eslint/ban-tslint-comment': 'warn',
		'@typescript-eslint/class-literal-property-style': 'warn',
		'@typescript-eslint/consistent-type-assertions': [
			'warn',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never',
			},
		],
		'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowHigherOrderFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],
		'@typescript-eslint/member-ordering': 'warn',
		'@typescript-eslint/no-base-to-string': 'warn',
		'@typescript-eslint/no-confusing-void-expression': [
			'warn',
			{
				ignoreVoidOperator: true,
			},
		],
		'@typescript-eslint/no-dynamic-delete': 'warn',
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-invalid-void-type': 'warn',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ args: 'after-used', ignoreRestSiblings: true },
		],
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'warn',
		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': 'warn',
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': [
			'warn',
			{
				ignoreEnums: true,
				ignoreDefaultValues: true,
				ignoreArrayIndexes: true,
				ignore: [-1, 0, 1, 2, 10, 100, 1000],
			},
		],
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': [
			'error',
			{
				ignoreDeclarationMerge: true,
			},
		],
		'@typescript-eslint/no-require-imports': 'warn',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [
			'error',
			{
				builtinGlobals: true,
				hoist: 'functions',
				allow: ['name'],
			},
		],
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/no-unnecessary-type-constraint': 'warn',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
			},
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				typedefs: true,
				variables: false,
			},
		],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/prefer-literal-enum-member': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/prefer-reduce-type-parameter': 'warn',
		'@typescript-eslint/prefer-string-starts-ends-with': 'warn',
		'@typescript-eslint/prefer-ts-expect-error': 'warn',
		'@typescript-eslint/promise-function-async': 'warn',
		'@typescript-eslint/require-array-sort-compare': [
			'warn',
			{
				ignoreStringArrays: true,
			},
		],
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				checkCompoundAssignments: true,
			},
		],
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowBoolean: true,
				allowNullish: true,
				allowAny: true,
			},
		],
		'@typescript-eslint/sort-type-union-intersection-members': 'warn',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/unbound-method': 'warn',
		camelcase: 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},

			{
				selector: 'variableLike',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},

			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},

			{
				selector: ['memberLike'],
				leadingUnderscore: 'allow',
				format: ['camelCase', 'snake_case', 'PascalCase'],
			},

			{
				selector: 'property',
				modifiers: ['static'],
				format: ['camelCase', 'UPPER_CASE'],
			},

			{
				selector: 'class',
				format: ['PascalCase', 'camelCase'],
			},

			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
		],
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': ['error'],
	},
}
