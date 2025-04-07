const prompt = require('prompt-sync')();

var mes = prompt(' o mes: ')

if(mes == 'janeiro' || mes == 'março' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro') {
    console.log('esse mes tem 31 dias ');
    
}else if ( mes == 'abril'|| mes == 'junho' || mes == 'setembro' || mes == 'novembro'){
    console.log('esss mes tem 30 dias ');
    
}else if (mes == 'fevereiro'){
    console.log('esse mes foi excluido ele tem só 28 dias =(');
    
}



















