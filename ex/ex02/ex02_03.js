const prompt = require('prompt-sync')();

var num = Number(prompt('qual e o numero'))

if (num %2 == 0 ){
    console.log(' numero par ');
} else {
    console.log('numero impar  ');
}