import test from 'ava';
import * as number from '../../../src/index.js';

test('shr', (t) => {
	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.floor(Math.random() * 2 ** 32);
		const b = Math.floor(Math.random() * 32);

		t.deepEqual(number.shr(a, b), a >> b, a + ' >> ' + b);
	}
});
