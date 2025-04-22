function converterParaCentimetros(metros) {

    const centimetros = metros * 100;
   

    return centimetros;
  }
 

  const metros = 5;  
  const centimetros = converterParaCentimetros(metros);
 
  console.log(`${metros} metros são equivalentes a ${centimetros} centímetros.`);

15
function calcularDivida(dvida) {
 
    const tabela = [
      { parcelas: 1, juros: 0 },
      { parcelas: 3, juros: 0.10 },
      { parcelas: 6, juros: 0.15 },
      { parcelas: 9, juros: 0.20 },
      { parcelas: 12, juros: 0.25 }
    ];
 
    console.log("Tabela de Dívida:");
    console.log("Parcelas | Juros (%) | Valor Juros | Valor Parcela");
 

    tabela.forEach(item => {
      const valorJuros = dvida * item.juros;
      const valorTotal = dvida + valorJuros;
      const valorParcela = valorTotal / item.parcelas;
 
      console.log(`${item.parcelas}        | ${item.juros * 100}%     | R$ ${valorJuros.toFixed(2)}     | R$ ${valorParcela.toFixed(2)}`);
    });
  }
 

  calcularDivida(1000);