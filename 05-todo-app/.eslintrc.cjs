module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard', 'plugin:react/jsx-runtime', 'eslint-config-prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	//indent: ['error', 'tab'],
	rules: {},
};
