const prompt = require('prompt-sync')();

var data = Number(prompt('qual seu ano de nascimento'))
var idade =2025 - data 
if (idade >18 ) {
    console.log('maior de idade '); 
} else {
    console.log('menor de idade  ');
}