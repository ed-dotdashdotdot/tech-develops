var sum = require('./sum.js');

describe('Something', () => {
	it('returns a number', () => {
		expect(sum(1,1)).toBe(2);
	});
});
