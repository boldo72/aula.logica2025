const prompt = require('prompt-sync')()


var valorcompra  = 120
var clientevip = true

if (valorcompra >= 100){
    if(clientevip != true) {
        console.log(`vc ganhou R$ ${valordacompra * 0.1}`);// ou vc pode colocar 10 /100
        
    }else {
        var desconto = valorcompra * 5 / 100
        console.log(`vc ganhou R$ ${desconto} de descomto`);
        
    }
}else {
    var restante  = 100 - valorcompra
    console.log(`compre mais R$ ${restante} e ganhe desconto `);
    
}



var idade  = Number(prompt('digitite sua idade :'))

if (idade < 16) {
    console.log('não pode votar ')

} else if (idade > 18 && idade < 70) {
    console.log('obrigatório')
} else if (idade > 16 || idade <18) {
    console.log('facultativo ')
} else if (idade > 70) {
    console.log('facultativo ')

}


var n1 = Number(prompt('digitite um numero: '))
var n2  = Number(prompt('digitite um numero: '))
var op  = Number(prompt('digitite o operador (+ - / * **): '))

switch (op) {
    case '+':
        console.log(n1 +n2);
        break;
case '-':
    console.log(n1 - n2);
case '/':
    console.log(n1 / n2);
case '*':
    console.log(n1 * n2);
case '**':
    console.log(n1 ** n2);
break;        
 default:
    console.log('operador invalido ');
    
}














































