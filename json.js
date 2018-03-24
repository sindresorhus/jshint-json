'use strict';
const circularJSON = require('circular-json-es6');

module.exports = {
	reporter(result, data) {
		console.log(circularJSON.stringify({
			result,
			data
		}));
	}
};
