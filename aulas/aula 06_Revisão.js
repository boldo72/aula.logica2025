const prompt = require('prompt-sync')()

let nota; 

let nome = 'carlos';

nome = 'boldo';
nota = 8.5;

var sobrenome = prompt('digite seu nome: ')
var nota1 = Number(prompt ('digite a nota da 1° prova '))
var nota2 =Number(prompt ('digite a nota da 2°prova '))

//processamento de dados 
var media = (nota1+nota2)/2
var nomecompleto = nome + '' + sobrenome
var nomecompleto2 = `${nome} ${sobrenome}` 
 var idade = prompt('digite seu nome')
 var idadenumero = parseInt(idade)

 //saida dedados 
 console.log('---relatorio final---')
 console.log(`o seu nome e :${nomecolpleto} \n sua idade ${idade}`)
 console.log(`sua media é: ${media} `)

 var n = 0
 n = 0+1
 n = n + 1
 n = n + 1
 n = n + 1
 n = n + 1 
 n +=1
 n++
 n += 3
 n--
 n = n - 1
 n -= 2     


let horasPorDia = Number(prompt('Quantas horas trabalhou por dia?'));
let diasTrabalhados = Number(prompt('Quantos dias trabalhou?'));
let valorHora = Number(prompt('Qual é o valor da hora?'));
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R$ ${custoTotal}`);