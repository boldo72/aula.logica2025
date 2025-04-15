const prompt = require('prompt-sync')();

var num1 = Number(prompt('qual e o numero '))

if (num1 >0) {
    console.log('positivo');
} else {
    console.log('negativo');
}
