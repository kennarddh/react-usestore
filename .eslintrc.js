module.exports = {
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'lf',
			},
		],
		'no-console': 'off',
		'no-unused-vars': 'warn',
	},
}
