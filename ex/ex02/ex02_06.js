const prompt = require('prompt-sync')();

var num1 = Number(prompt('qual e o 1° numero '))
var num2 = Number(prompt('qual e o 2° numero '))

if (num1 == num2) {
    console.log('são iguais');
} else {
    console.log('são diferentes ');
}