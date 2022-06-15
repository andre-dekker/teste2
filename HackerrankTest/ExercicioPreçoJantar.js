function totalPrice(a){
   var preçoJantar = a;
   var taxa = (a * 0.1).toFixed(1);
   var total = (a + a * 0.1).toFixed(1);

   console.log(('Valor do jantar: R$ ' + preçoJantar) + '.00')
   console.log(('Taxa de Serviço: R$ ' + taxa) + '0')
   console.log(('Total: R$ ' + total) + '0')
}

totalPrice(40000)