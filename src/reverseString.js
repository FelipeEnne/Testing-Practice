function reverseString(string) {
  const s = string.split('');
  const arr = [];
  for (let i = 0; i < s.length; i += 1) {
    arr.unshift(s[i]);
  }
  return arr.join('');
}

module.exports = reverseString;
