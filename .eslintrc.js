const OFF = "off";
const ERROR = "error";

module.exports = {
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	globals: {
		chrome: true
	},
	"parserOptions": {
		"ecmaVersion": 6
	},
	rules: {
		'accessor-pairs': OFF,
		'brace-style': [ERROR, '1tbs'],
		'comma-dangle': [OFF, 'always-multiline'],
		'consistent-return': OFF,
		'dot-location': [ERROR, 'property'],
		'dot-notation': ERROR,
		'eol-last': ERROR,
		'eqeqeq': [ERROR, 'allow-null'],
		'indent': OFF,
		'keyword-spacing': [ERROR, {
			after: true,
			before: true
		}],
		'no-bitwise': OFF,
		'no-inner-declarations': [ERROR, 'functions'],
		'no-multi-spaces': ERROR,
		'no-restricted-syntax': [ERROR, 'WithStatement'],
		'no-shadow': ERROR,
		'no-unused-expressions': OFF,
		'no-unused-vars': [ERROR, {
			args: 'none'
		}],
		'no-useless-concat': OFF,
		'quotes': [ERROR, 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true
		}],
		'space-before-blocks': ERROR,
		'space-before-function-paren': OFF,
		'no-useless-escape': OFF,
		'no-console': OFF,
		'dot-notation': OFF
	},
};
