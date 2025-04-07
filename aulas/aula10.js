const prompt = require('prompt-sync')()

var resposta = 's'

while (resposta == 's') {
    console.log('vc esta no bloco certo ');
    resposta = prompt('deseja continuar? S/N')
}
    
console.log('fim');


var senhasecreta = 'senai'
var senhadigitada


while (senhasecreta != senhadigitada) {
    console.log('descubra a senha ');
    senhadigitada = prompt('qual e a senha?')
}
 console.log('fim');

var contador = 1

while (contador <= 5) {
    console.log(`contador esta no n° ${contador}`);
    
}

//ex 4
//posso deixar meu laço executando sem uma condição especifica, apenas 
// com while (true) e encerrar o loop com o break

var total = 0
var qtde = 0 

while (true ) {
    var valor = Number(prompt('digite  o valor do produto (0 para encerrar)'))

    if (valor == 0){
        break 
    }else {
        total = valor + total 
        qtde++
    }
}

console.log(`vc comprou no total ${qtde} de produtos `);
console.log(`valor total da compra R$ ${total. toFixed(2)}`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var contador = 10

while (contador >= 0) {
    console.log(`contador esta no n° ${contador}`);
    contador--
    break
}



















































































