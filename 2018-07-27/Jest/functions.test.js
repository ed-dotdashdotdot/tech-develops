const functions = require('./functions');

// test('Adds 2+2 to equal 4', () => {
// 	expect(functions.add(2,2)).toBe(4);
// });

describe('fetch user data', () => {
	it('is Leanne Graham', () => {  
		// expect.assertions(1);
		functions.fetchUser().then(data => {
			expect(data.name).toEqual('Leanne Graham1');
		});
	});
});


