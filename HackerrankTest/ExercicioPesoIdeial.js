function pesoIdeal(a , s){
   var homem = 22 * Math.pow(a, 2).toFixed(1) + ' Kg'
   var mulher = 21 * Math.pow(a, 2).toFixed(1) + ' Kg'
   var sexo = 'Feminino'
   if(s === 'Feminino'){
     return mulher
   }else {
     return homem
   }
   
}
console.log(pesoIdeal(1.69, 'M'))
