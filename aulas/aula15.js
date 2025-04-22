var escola2 = 'SENAI'

function nomeescola2() {
    var escola = 'SESI'
    console.log(`valor dentro da função ${escola2} `);
    
}

var escola2 = 'SENAI'
console.log(`valor fora da função ${escola2} `);
nomeescola2()
console.log(`valor apos a função: ${escola2} `);

//documentando funções usando JSDoc

/** 
*soma de dois numeros
* @ param {number} a - primeiro numero
* @ param {number} b - segundo numero
* @ return {number} - soma dos dois numeros
*/
function soma(a, b) {
    return a+ b
}
soma(2,4)





























































































































