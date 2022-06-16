function pesoIdeal(a , s){
   var homem = 22 * Math.pow(a, 2).toFixed(2) + ' Kg'
   var mulher = 21 * Math.pow(a, 2).toFixed(2) + ' Kg'
   var sexo = 'Feminino'
   if(s === 'Feminino'){
     return mulher
   }else {
     return homem
   }
   
}
console.log(pesoIdeal(1.68, 'M'))
