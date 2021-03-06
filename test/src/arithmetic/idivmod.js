import test from 'ava';
import * as number from '../../../src/index.js';
import int32 from '@aureooms/js-int32';
import * as random from '@aureooms/js-random';

test('idivmod', (t) => {
	const one = function (a, b) {
		const q = (a / b) | 0;
		const x = a;

		t.deepEqual(number.idivmod(x, b), [q, (a %= b)], x + ' /%= ' + b);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = random.randint(int32.min, int32.max + 1);
		const b = random.randint(int32.min, int32.max + 1);
		one(a, b);
	}
});
