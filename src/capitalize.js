function capitalize(string) {
  const s = string.split('');
  s[0] = s[0].toUpperCase();

  return s.join('');
}

module.exports = capitalize;
