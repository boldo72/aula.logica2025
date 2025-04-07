const prompt = require('prompt-sync')()

console.log('======================================');
console.log('🏀     joguinho da mega     🏀');
console.log('======================================');

var nunmega = Math.floor(Math.random() * 60) + 1
var seunumero = Math.floor(Math.random() * 6) + 1
var tentativas = 0


while (true) {
    if (seunumero == nunmega){
        console.log(`vc ganhou na mega!!!🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 `);
        break
    }else if (seunumero != nunmega){
        console.log(`vc nao ganhou  👎`);
        break
        
    }

}