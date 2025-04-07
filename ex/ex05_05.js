const prompt = require('prompt-sync')();

var somaidadeF = 0
var somaidadeM = 0

for(var x = 1; x <= 10; x++){
    var idade = Number(prompt('digite sua idade: '))
    var sexo = prompt('digite seu sexo f/m: ')

    if(sexo == 'M'){
        qtdeM++;
        somaidadeF = somaidadeM + idade
    }else if(sexo == 'F'){
        qtdeF++;
        somaidadeF = somaidadeM + idade
    }
}

console.log(`a media dos sexos M e de ${somaidadeM / qtdeM}`);
console.log(`a media dos sexos F e de ${somaidadeF / qtdeF}`);
console.log(`a media dos grupos e de  ${(somaidadeF + somaidadeM) / 10}`);































