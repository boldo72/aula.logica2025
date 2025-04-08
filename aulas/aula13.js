const prompt = require('prompt-sync')()

//interação sobre nossos vetores (arreys / listas )

//vetor         0       1          2        3
var frutas = ['maça','banana', 'abacaxi', 'uva ']
//para interar sobre um vetor, utilizamos o for 
for (var x = 0; x <= frutas.length; x++){
    console.log(`a fruta da posição ${x} é ${frutas[x] }`);
    
}
console.log('fim');


//interando sobre uma lista usando  o for of 

var listadejogadores = ['pele', 'maradona', 'messi', 'ronaldo']
for (var jogador of listadejogadores){
    console.log(`o jogador é ${jogador}`);
    
}
    


var listadnms = [1,5,2,3,5,]
for (var nr of listadnms){
    console.log(`o n° é ${nr}`);
    
}
    
//arreys

var vogais = ['a','e','i','o','u']
var consoantes = ['b ', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'j' , 'k' , 'l' , 'm' , 'n' , 'p' , 'q' , 'r' , 's' , 't' , 'v' , 'w' , 'x' , 'y' , 'z']
var numero = ['0','1','2','3','4','5','6','7','8','9']

var letraparaverificar = prompt('digite uma letra:  ')
if (vogais.includes(letraparaverificar.toLowerCase())) {
    console.log(`a letra ${letraparaverificar} e uma vogal`); 
}else if (consoantes.includes(letraparaverificar.toLowerCase())){
    console.log(`a letra ${letraparaverificar} não e uma vogal`)
}else if(numeros.includes(letraparaverificar)){
    console.log(`${letraparaverificar} naõ e uma numero `);
}else {
    console.log(`${letraparaverificar} nao e uma letra nem numero `);    
}

//
var listaDeFrutas = ['maça','banana', 'abacaxi', 'uva ']
for (const [pos, frutas] of listaDeFrutas.entries() ){
    console.log(`a fruta da posição ${pos} e ${frutas}`);
}
    
var produtos = 'celular, tv, tablet, monitor'
var listadeprodutos  = produtos.split(',')
console.log(produtos);
console.log(listadeprodutos);

var escola = 'SENAI'
console.log(escola[0]);
console.log(                                                                                                                                        );


var Escolas = ['S','E','N','A','I']
for (var nr of Escolas){
    console.log(`${nr}`);
}


















