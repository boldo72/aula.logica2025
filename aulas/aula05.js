const prompt = require('prompt-sync')()
//operações com variaveis 

var nr1 = Number(prompt ('digite o primeiro numero'))
var nr2 = Number(prompt ('digite o segundo numero'))

let soma = nr1 + nr2
console.log(nr1,nr2,soma)

let subitracao = nr1 - nr2
console.log(nr1, nr2,subitracao)

let multiplicacao = nr1 * nr2 
console.log(nr1, nr2,multiplicacao)

let divisao = nr1 / nr2 
console.log(nr1, nr2,divisao)

let exponencicao = nr1 ** nr2
console.log(nr1, nr2,exponencicao)

var valor  = Number(prompt ('digite o primeiro numero'))
var desconto = Number(prompt ('digite o segundo numero'))
valor = valor - desconto 

console.log(desconto,valor,subitracao)

var numero = 4 / 2
numero = numero ** 2 
numero = numero * (50-20)
console.log('o valor e ', numero)
console.log(`o valor e:'${numero}`)

var numero   = Number(prompt ('digite o primeiro numero'))
numero = numero *2
numero = numero /2
console.log(numero)

let horastrablhadas = 8
let diastrabalhados = 15 
let projeto = horastrablhadas * diastrabalhados
let valorhora = 100 
let valortotaldoprojeto = projeto * valorhora
console.log(`deveria cobrar ${valortotaldoprojeto}reais`)

















































































