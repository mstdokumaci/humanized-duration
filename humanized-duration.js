(function (environment) {
	'use strict';

	var in_seconds = [604800, 86400, 3600, 60, 1];
	var names = ['w', 'd', 'h', 'm', 's'];

	function humanized_duration (milliseconds, item_count) {
		var seconds = Math.ceil(milliseconds / 1000);

		if (!item_count) item_count = 2;
		var humanized = [];

		for (var i=0; i < 5; i++) {
			var f = Math.floor(seconds / in_seconds[i]);
			if (f) humanized.push(f + names[i]);
			seconds %= in_seconds[i];
			if (!seconds || humanized.length>= item_count) break;
		}

		return humanized.join(' ');
	}

	if (environment.exports)
		environment.exports = humanized_duration;
	else
		environment.humanized_duration = humanized_duration;
})(typeof exports === "undefined" ? window : module);
