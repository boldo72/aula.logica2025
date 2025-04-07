const prompt = require('prompt-sync')()

console.log('======================================');
console.log('🏀     joguinho da adivinhação     🏀');
console.log('======================================');

var numerosecreto = Math.floor(Math.random() * 10) + 1
var acertou = false 
var tentativas = 0


while (acertou == false) {
    var chute = Number(prompt('digite um numero entre 1 e 10: '))
    tentativas++
    if (chute == numerosecreto){
        console.log(`opa vc acertou finalmente em ${tentativas} tentativas!!!🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 `);
        acertou = true
    }else if (chute > numerosecreto){
        console.log(`vc chutou ${chute}, tente um numero 👎`);
    }else if (chute < numerosecreto){
        console.log(`vc chutou ${chute}, tente um numero 👍`);
        
    }

}