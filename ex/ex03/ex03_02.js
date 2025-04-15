const prompt = require('prompt-sync')();

var data = Number(prompt('qual seu ano de nascimento'))
var idade =2025 - data 

if (idade <= 10 ) {
    console.log('criança')

} else if (idade >= 11 && idade <= 17 ) {
    console.log('adolescente')

} else if (idade >= 18 && idade <=50) {
    console.log('adulto ')

} else if (idade >= 60) {
    console.log('idoso ')
} 