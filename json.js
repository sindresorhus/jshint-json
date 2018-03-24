'use strict';
module.exports = {
	reporter(result, data) {
		console.log(JSON.stringify({
			result,
			data
		}));
	}
};
