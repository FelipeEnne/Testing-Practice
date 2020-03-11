const capitalize = require('./capitalize');

test('Test 1 - simple string', () => {
    expect(capitalize('test')).toBe('Test');
});

test('Test 2 - simple string', () => {
    expect(capitalize('string')).toBe('String');
});

test('Test 3 - string space', () => {
    expect(capitalize('string space')).toBe('String space');
});