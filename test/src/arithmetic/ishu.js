import test from 'ava';
import * as number from '../../../src/index.js';

test('ishu', (t) => {
	const n = 10;

	for (let i = 0; i < n; ++i) {
		let a = Math.floor(Math.random() * 2 ** 32);
		const b = Math.floor(Math.random() * 32);
		const x = a;

		t.deepEqual(number.ishu(x, b), (a >>>= b), x + ' >>> ' + b);
	}
});
