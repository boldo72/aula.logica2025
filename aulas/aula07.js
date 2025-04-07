const prompt = require('prompt-sync')()


var a = 2 
var b = 3 

console.log(a > b)
console.log(a == b)
console.log(a != b)
console.log(a > b)
console.log(a >= b)

// if estrutura de condição mto utilizada na progamação 
var tenhoingresso = false   
if(tenhoingresso== true ) {  //se a condição for verdadeira 
    //entra nesse bloco de comando 
    console.log('posso entrar no show ');
}
if(tenhoingresso== false  ) {  //se a condição for verdadeira 
    //entra nesse bloco de comando 
    console.log('posso entrar no show ');
}

var idade = Number(prompt('qual esua idade '))
if (idade >=18) {
    console.log('maior idade ');
} else {
    console.log('menor idade ');
}

var idade = Number(prompt('qual esua idade '))
if (idade < 18) {
    console.log('vc não pode dirigir  ');
}

tenhoingresso = false   
if(tenhoingresso== true ) {  //se a condição for verdadeira 
    console.log('posso entrar no show ');
}else {  //se a condição for falsa 
    console.log('estou barrando na portaria ');
    
}