const ceasarCipher = require('./ceasarCipher');

test('Test 1 - a to z', () => {
  expect(ceasarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Test 2 - A to Z', () => {
  expect(ceasarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA');
});

test('Test 3 - 0 to 9', () => {
  expect(ceasarCipher('0123456789')).toBe('0123456789');
});

test('Test 4 - Punctuation', () => {
  expect(ceasarCipher(".,:;~/\^'`")).toBe(".,:;~/\^'`");
});

test('Test 5 - With space', () => {
  expect(ceasarCipher('With space')).toBe('Xjui tqbdf');
});
