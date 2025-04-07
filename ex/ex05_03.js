const prompt = require('prompt-sync')();


let totalPar = 0;
let totalImpar = 0
let qtde = 2;

while (true) {
    let valor = Number(prompt('Digite o número ou 0 para parar: '));

    if (valor == 0) {
        break;
    }else {
        if (totalPar % 2 == 0){
            totalPar += valor
        }else{
            totalImpar += valor
        }
    }
}
console.log(`A soma do n° par é ${totalPar} `);
console.log(`A soma do n° ${totalImpar}`);