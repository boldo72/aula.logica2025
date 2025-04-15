const prompt = require('prompt-sync')();

var filmes = ['avatar',
            'moana',
            'toy store',
            'sonic',
            'homem aranha',
            'vingadores',
            'transformers'
            
] 
 
console.log(filmes[0]);
console.log(filmes[4]);

filmes[6] = 'operção natal'
console.log(filmes);

filmes.push('os incriveis')
console.log(filmes);

filmes.splice(5,0,'up')
console.log(filmes);

filmes.shift()
console.log(filmes);

filmes.splice(0,1)
console.log(filmes);

filmes.pop()
console.log(filmes);

filmes.slice(5,8)
console.log(filmes);

filmes.slice(1)
console.log(filmes);

filmes.sort()
console.log(filmes);


































