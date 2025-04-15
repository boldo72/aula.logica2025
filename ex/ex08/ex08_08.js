function senhaaleatoria(qtdecaracteres) {
    var listacaracteres = ['!', 'a', 5, 'R', '$', '#']
    var senha = ''

    for (var x = 1; x <= qtdecaracteres; x++){
        var porsorteada = Math.floor(Math.random) * 6
        senha = senha + listacaracteres[porsorteada]
    }
    return senha; 
}
var senhagerada = senhaaleatoria(8)
console.log(senhaaleatoria);























