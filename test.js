'use strict';
var assert = require('assert');
var jshint = require('jshint/src/cli').run;
var jsonReporter = require('./json.js').reporter;

describe('jshint-json', function () {
	it('should be used by JSHint', function () {
		var ret = false;
		var _log = console.log;

		console.log = function (str) {
			if (/{"result"/.test(str)) {
				ret = true;
			}
		}

		jshint({
			args: ['test.js'],
			reporter: jsonReporter
		});

		console.log = _log;

		assert(ret);
	});
});
