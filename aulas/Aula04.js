const prompt = require('prompt-sync')()
//criando nossa primeira variavel
//uma variavel serve para armazenar uma informação/valor 

var curso = 'desemvolvimento de sistemas';
console.log('curso');
console.log('curso');
console.log(curso);
console.log('curso', curso)

var idade = 15;
console.log(idade)

var temperatura = 24.5
console.log(temperatura)

var nome = 'boldo'
console.log(nome)

console.log('ola ', nome, 'vc tem', idade, 'anos')
console.log('vc esta cursando ', curso, 'hj faz', temperatura, '°c')

console.log(`ola , ${nome} vc tem ${idade}, anos 
    vc esta cursando, ${curso} hj faz ${temperatura}, °c`)

var podedirigir = true 
var estachovendo = false

var curso 
//exercicios 
//Nota1 valido 
//nomeCompleto valido
//Nome Completo invaldo
//Média invalido 
//console invalido 
//_salario valido 
//9dade invalido 
//Minha_Variavel valido 
//var invalido 
//valor$ invalido 
//nome-completo invalido
//escola_ valido 
//TELEFONE valido 
//true invalido 

var _idade = 15
var _peso = 100
var _nome = 'boldo'

console.log(_nome,  _idade, _peso)

_nome = prompt('qual e o nome ?')
_idade = prompt('quale e a idade ?')
_peso = prompt('qual e o peso ?')
console.log(_idade, _nome, _peso)

var num1 = prompt ('digite o primeiro numero')
var num2 = prompt ('digite o segundo  numero')

console.log(num1 + num2);

num1 = Number(num1);
console.log(typeof num1);
num1 = Number(num1);
console.log(typeof num1);

var nr1 = Number(prompt ('digite o primeiro numero'))
var nr2 = Number(prompt ('digite o segundo numero'))
console.log (nr1 + nr2)

nr1 = '100.14';
nr1 = Number ('100.14');
nr1 = parseInt('100.14');
nr1 = parseFloat('100');

_nome = prompt('qual e o nome ?')
_idade = parseInt(prompt('quale e a idade ?'))
_peso = parseFloat(prompt('qual e o peso ?'))
console.log(_idade, _nome, _peso)

//CRIACOES DE VARIAVEAIS

var nome = 'boldo'
var altura = '1.83'
var escola = 'sesi'
var ano =  'segundo'  

nome = prompt('qual seu nome?')
altura = prompt('qual sua altura?')
escola = prompt('qual sua escola?')
ano = prompt('qual seu ano escolar?')

console.log(nome, altura, escola, ano)

























































































































































