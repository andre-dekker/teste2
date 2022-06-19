function tripleTheChances (arr) {
   var resultado = []
   for(var index = 0; index < arr.length; index++) {
      resultado.push(arr[index] * 3)
      
   }
   return resultado
}
console.log(tripleTheChances([3, 4 ,5, 10, 15, 30]))