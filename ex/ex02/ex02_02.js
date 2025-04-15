const prompt = require('prompt-sync')();

var num1 = Number(prompt('escreva um numero'))
var num2 = Number(prompt('escreva um numero'))

if (num1 > num2 ) {
    console.log(' num1 e maiorque o num2 ');
} else {
    console.log('num2 e maior que o num1  ');
}
