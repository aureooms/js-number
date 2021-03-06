import test from 'ava';
import * as number from '../../../../src/index.js';

test('idiv2', (t) => {
	const one = function (n) {
		const x = n;

		t.deepEqual(number.idiv2(x), (n /= 2), x + ' /= ' + 2);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random());
	}

	one(Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY);
});
