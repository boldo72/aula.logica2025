const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Qual é o 1° numero?'));
let nota2 = Number(prompt('Qual é o 2° numero?'));
let media = (nota1 + nota2)/2;

if (media >= 7 ) {
    console.log('parabens vc foi a provado ');
} else {
    console.log(' parabens burro vc não passou kkkkkkkkkk');
}
