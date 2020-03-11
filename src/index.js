import capitalize from './capitalize';
import reverseString from './reverseString';
import calculator from './calculator';
import ceasarCipher from './ceasarCipher'

console.log(capitalize('string')); 
console.log(reverseString('string'));

console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.divide(1, 2));
console.log(calculator.multiply(1, 2));

console.log(ceasarCipher('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
console.log(ceasarCipher('With space'));
