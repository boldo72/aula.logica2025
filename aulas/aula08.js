const prompt = require('prompt-sync')()

//estrutura condicional composta e encarada 
//operadores logicas 
//&& - e
// || - ou
// ! - não 

let a = 2
let b = 3
let c = 5
console.log(a > 2 && b > 2) //false pq  1 condição e F
console.log(a > 1 && b > 2) //false pq apenas 1 condição e v
console.log(a > 1 && b > 4) //true pq 2 condição e v
console.log(a > 1 && b > 4 && c > 5) // false

console.log(a > 2 || b > 2)// false nunhuma condição  e V
console.log(a > 1 || b > 2)//true pelo menos 1 v 
console.log(a > 1 || b > 4)//true pelo menos 1 v 
console.log(a > 1 || b > 4 || c > 4) // true 

var altura = Number(prompt('digitite sua altura'))
var peso = Number(prompt('digitite seu peso '))

var imc = (peso / (altura ** 2))

if (imc < 18.5) {
    console.log('vc esta abaixo do peso ideal')

} else if (imc > 18.5 && imc < 24.5) {
    console.log('vc esta no peso ideal')
} else if (imc > 25 && imc < 29.9) {
    console.log('vc esta com sobrepeso ')
} else if (imc > 30) {
    console.log('vc esta obeso ')

}

var lado1 = Number(prompt('digitite o numero do lado1:'))
var lado2 = Number(prompt('digitite o numero do lado2:'))
var lado3 = Number(prompt('digitite o numero do lado3:'))

if (lado1 == lado2 && lado3 == lado1 && lado3 == lado2) {
    console.log('esse triangulo e equilatero');

} else if (lado1 != lado2 && lado3 != lado1 && lado3 != lado2) {
    console.log('esse triangulo e escaleno');
} else {
    console.log('esse triangulo e isoceles')
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var valordvendas = Number(prompt('fale o valor das vendas'))
var horastrabalhadas = Number(prompt('fale as horas trabalhadas '))

if (valordvendas > 5000 || horastrabalhadas > 40) {
    console.log('tem direito ao bonus');
} else {
    console.log('não tem direito ao bonus');

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var letra = Number(prompt('digite a letra:'))

if (letra =='a'||letra =='e'||letra =='i'||letra =='o'||letra =='u'||letra =='ão'){
    console.log('vogal');
    
}else {
    console.log('concoante');
    
}