module.exports = {
	plugins: ['unicorn', 'import'],
	extends: ['eslint:recommended', 'plugin:import/recommended'],
	rules: {
		/////////////////////
		//  disabled rules //
		/////////////////////

		'require-await': 'off',

		//////////////////
		// eslint rules //
		//////////////////

		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		curly: 'warn',
		'default-case': 'warn',
		'default-case-last': 'warn',
		'default-param-last': 'warn',
		eqeqeq: 'warn',
		'guard-for-in': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-console': 'warn',
		'no-confusing-arrow': 'warn',
		'no-else-return': 'warn',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'warn',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-str': 'warn',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'warn',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'warn',
		'no-return-assign': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-template-curly-in-string': 'warn',
		'no-undefined': 'warn',
		'no-unmodified-loop-condition': 'warn',
		'no-unreachable-loop': 'warn',
		'no-unsafe-optional-chaining': 'warn',
		'no-useless-backreference': 'warn',
		'no-useless-call': 'error',
		'no-useless-concat': 'warn',
		'no-useless-computed-key': 'warn',
		'no-useless-rename': 'warn',
		'no-useless-return': 'warn',
		'object-shorthand': 'warn',
		'prefer-arrow-callback': 'warn',
		'prefer-const': 'warn',
		'prefer-named-capture-group': 'warn',
		'prefer-promise-reject-errors': 'error',
		'prefer-template': 'warn',
		'quote-props': ['error', 'as-needed', { keywords: false, numbers: true }],
		radix: 'warn',
		'require-atomic-updates': 'warn',
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		'sort-keys': 'off',
		'vars-on-top': 'warn',
		'no-duplicate-imports': 'off',
		'sort-imports': 'off',
		'no-return-await': 'error',

		/////////////////////////////////
		// @eslint-plugin-import rules //
		/////////////////////////////////
		'import/no-unresolved': 'error',
		'import/no-default-export': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
		'import/no-internal-modules': 'off',
		'import/no-absolute-path': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'error',
		'import/no-useless-path-segments': 'warn',
		// TODO: Cannot read property 'get' of undefined Occurred while linting [file]
		// Rule: "import/no-unused-modules"
		'import/no-unused-modules': [
			'off',
			{
				unusedExports: true,
				ignoreExports: ['./src/bootstrap.ts'],
			},
		],
		'import/no-duplicates': 'warn',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '@smartlook/**',
						group: 'external',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'import/namespace': 'off',
		//////////////////////////////////
		// @eslint-plugin-unicorn rules //
		//////////////////////////////////
		'unicorn/filename-case': [
			'error',
			{
				case: 'kebabCase',
			},
		],
	},
}
