const calculator = require('./calculator');

test('Test 1 - add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Test 2 - subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Test 3 - multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Test 4 - divide', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});
