const prompt = require('prompt-sync')();

var velocidade = Number(prompt('qual e a velocidade '))

 if(velocidade >80) {
    var multa = (velocidade-80)* 7
console.log(`voce sera multado em ${multa}`) 
} else {
console.log('não foi multado');
}
