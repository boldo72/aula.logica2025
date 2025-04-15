const prompt = require('prompt-sync')();


var inicio = Number(prompt('digite o inicio: '))
var fim  = Number(prompt('digite o fim: '))
var passo = Number(prompt('digite o passo: '))

for(var x = inicio; x <= fim; x+= passo){
    console.log(x);
    
}


