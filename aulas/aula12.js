const prompt = require('prompt-sync')()

var fruta = 'maça'

fruta = 'banana'


var numero = [1,2,8,5,9]
var nomes = ['ana','joão', 'maria']
var listamista = [4,'joão', true, 7.55]

var listasDevetores = [['coca - cola', 'hot dog'],[5.00, 10.00]]
console.log(listasDevetores [0][1]);

var frutas = ['maça', 'banana', 'abacaxi', 'uva','laranja']
console.log(frutas);
frutas[3] = 'melancia'
console.log(frutas);
console.log(frutas[2]);
frutas. splice (2, 0, 'morango')

frutas = ['maça', 'banana', 'abacaxi', 'uva','melancia','laranja','morango']

console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);
console.log(frutas.sort);

