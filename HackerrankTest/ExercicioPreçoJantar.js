function totalPrice(a){
   var preçoJantar = a;
   var taxa = a * 0.1;
   var total = a + a * 0.1;
   console.log('Valor do jantar: R$ ' + preçoJantar + ',00')
   console.log('Taxa de Serviço: R$ ' + taxa + ',00')
   console.log('Total: R$ ' + total + ',00')
}

totalPrice(100)