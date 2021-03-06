import test from 'ava';
import * as number from '../../../../src/index.js';

test('sub1', (t) => {
	const one = function (n) {
		t.deepEqual(number.sub1(n), n - 1, n + ' - ' + 1);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random());
	}

	one(Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY);
});
