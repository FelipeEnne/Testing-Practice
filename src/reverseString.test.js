const reverseString = require('./reverseString');

test('Test 1 - simple string', () => {
  expect(reverseString('string')).toBe('gnirts');
});