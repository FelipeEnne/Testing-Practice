function ceasarCipher(string) {
  string = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    string[i] = string[i].charCodeAt(0);
    if ((string[i] >= 97 && string[i] < 122) || (string[i] >= 65 && string[i] < 90)) {
      string[i] += 1;
    } else if (string[i] === 122) {
      string[i] = 97;
    } else if (string[i] === 90) {
      string[i] = 65;
    }
    string[i] = String.fromCharCode(string[i]);
  }
  return string.join('');
}

module.exports = ceasarCipher;