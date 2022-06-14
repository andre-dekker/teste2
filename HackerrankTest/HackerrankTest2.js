function simpleArraySum(ar) {
   // Write your code here
   var resultado = 0;
   for(var index = 0; index < ar.length; index++) {
      resultado = resultado + ar[index]
   }
   return resultado

    

}
console.log(simpleArraySum ([1, 4, 15, 27, 110]))