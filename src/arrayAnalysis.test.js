const arrayAnalysis = require('./arrayAnalysis');

const object = arrayAnalysis([1, 8, 3, 4, 2, 6]);

test('Test 1 - Verify the average', () => {
  expect(object.average).toBe(4);
});

test('Test 2 - Verify the minimum', () => {
  expect(object.min).toBe(1);
});


test('Test 3 - Verify the maximum', () => {
  expect(object.max).toBe(8);
});


test('Test 4 - Verify the length', () => {
  expect(object.length).toBe(6);
});
