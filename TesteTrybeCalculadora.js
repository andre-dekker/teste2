function calculadora(a, b, c){
   if(c === "+"){
      return a + b
   } else if(c === "-") {
      return a - b
   } else 
   return "Operação Invalida"
}
console.log(calculadora(10, 5, "-"))