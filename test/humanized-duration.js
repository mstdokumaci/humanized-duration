
var humanized_duration = require('../humanized-duration');

var assert = require('assert');

describe('Metric Suffix', function () {
	it('should return expected results', function () {
		assert.equal('59s', humanized_duration(59 * 1000));
		assert.equal('1m', humanized_duration(60 * 1000));

		assert.equal('58m 59s', humanized_duration((58 * 60 + 59) * 1000));
		assert.equal('59m', humanized_duration((58 * 60 + 60) * 1000));

		assert.equal('59m 59s', humanized_duration((59 * 60 + 59) * 1000));
		assert.equal('1h', humanized_duration((59 * 60 + 60) * 1000));

		assert.equal('1h 59s', humanized_duration((60 * 60 + 59) * 1000));
		assert.equal('1h 1m', humanized_duration((60 * 60 + 60) * 1000));

		assert.equal('1h 58m', humanized_duration((60 * 60 + 58 * 60 + 59) * 1000));
		assert.equal('1h 59m', humanized_duration((60 * 60 + 58 * 60 + 60) * 1000));

		assert.equal('22h 59m', humanized_duration((22 * 60 * 60 + 59 * 60 + 59) * 1000));
		assert.equal('23h', humanized_duration((22 * 60 * 60 + 59 * 60 + 60) * 1000));

		assert.equal('23h 59m', humanized_duration((23 * 60 * 60 + 59 * 60 + 59) * 1000));
		assert.equal('1d', humanized_duration((23 * 60 * 60 + 59 * 60 + 60) * 1000));

		assert.equal('1d 59s', humanized_duration((24 * 60 * 60 + 59) * 1000));
		assert.equal('1d 1m', humanized_duration((24 * 60 * 60 + 60) * 1000));

		assert.equal('1d 58m', humanized_duration((24 * 60 * 60 + 58 * 60 + 59) * 1000));
		assert.equal('1d 59m', humanized_duration((24 * 60 * 60 + 58 * 60 + 60) * 1000));

		assert.equal('1d 22h', humanized_duration((24 * 60 * 60 + 22 * 60 * 60 + 59 * 60 + 59) * 1000));
		assert.equal('1d 23h', humanized_duration((24 * 60 * 60 + 22 * 60 * 60 + 59 * 60 + 60) * 1000));

		assert.equal('5d 23h', humanized_duration((5 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000));
		assert.equal('6d', humanized_duration((5 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 60) * 1000));

		assert.equal('6d 23h', humanized_duration((6 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000));
		assert.equal('1w', humanized_duration((6 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 60) * 1000));

		assert.equal('5d 23h 59m', humanized_duration((5 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000, 3));
		assert.equal('6d 23h 59m 59s', humanized_duration((6 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000, 4));
	});
});
