module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'eslint-config-prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx'] },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-curly-brace-presence': [{ props: string, children: string }],
  },
};
