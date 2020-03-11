function reverseString(string) {
  string = string.split("");
  let arr = [];
  for(let i = 0; i < string.length; i++) {
    arr.unshift(string[i]);
  }
  return arr.join('');
}

module.exports = reverseString;