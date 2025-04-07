const prompt = require('prompt-sync')();

for (var contador = 1;contador <= 5; contador++){
    console.log(contador);
}console.log('FIM');





console.log('entregando os notbooks');
for(var nr = 1; nr <= 32; nr++){
    var nome = prompt(`quem e o n° ${nr}: `)
    var presente = prompt(`o(a) ${nome}esta presente (s ou n)?`)

    if(presente == 's'){
        console.log(`pegar o not ${nr}`);
        console.log(`levar o not ate o(a)${nome}`);
    }else {
        console.log(`não pegar o not ${nr}`);
        
    }   
}console.log('FIM');

var nr = 0 

for (var contador = 1 ; contador <= 10; contador++){
    console.log(`${nr} x ${contador} = `);
    
}


















