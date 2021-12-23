module.exports = {
	plugins: ['node'],
	extends: ['plugin:node/recommended'],
	rules: {
		/////////////////////
		//  disabled rules //
		/////////////////////

		// 'node/no-missing-import': 'off',
		'node/no-process-env': 'off',

		//////////////////////////////
		// eslint-plugin-node rules //
		//////////////////////////////
		'node/global-require': 'warn',
		'node/callback-return': [
			'error',
			[
				// The following variables will be considered callbacks. More can be added as necessary.
				'cb',
				'callback',
				// 'next', // koa uses next()
				'done',
			],
		],
		'node/handle-callback-err': ['error', '^.*(e|E)rr(or)?'],
		'node/no-callback-literal': 'warn',
		'node/no-new-require': 'error',
		'node/no-path-concat': 'error',
		'node/no-process-exit': 'error',
		'node/no-sync': [
			'warn',
			{
				allowAtRootLevel: true,
			},
		],
		// ignored 'modules' because we use typescript modules ??
		'node/no-unsupported-features/es-syntax': [
			'error',
			{ ignores: ['modules'] },
		],
	},
}
