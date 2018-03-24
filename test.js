/* eslint-env mocha */
'use strict';
const assert = require('assert');
const jshint = require('jshint/src/cli').run;
const jsonReporter = require('./json').reporter;

describe('jshint-json', () => {
	it('should be used by JSHint', () => {
		let ret = false;
		const _log = console.log;

		console.log = str => {
			if (/{"result"/.test(str)) {
				ret = true;
			}
		};

		jshint({
			args: ['test.js'],
			reporter: jsonReporter
		});

		console.log = _log;

		assert(ret);
	});
});
