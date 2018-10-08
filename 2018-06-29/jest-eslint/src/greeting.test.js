var greeting = require('./greeting.js');

describe('Something', () => {
	it('returns a string', () => {
		expect(typeof greeting("hello")).toBe("string");
	});
	it('should be a function', () => {
		expect(typeof greeting).toBe("function");
	});
	it('should not be a number', () => {
		expect(typeof greeting).not.toBe("number");
	});
});
