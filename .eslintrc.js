module.exports = {
	extends: [
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
	],
	plugins: ['prettier', 'react'],
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
		'react/prop-types': 'off',
		'import/prefer-default-export': 'off',
	},
}
