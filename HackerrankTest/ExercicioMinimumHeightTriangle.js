function triangle (b, area){
   var altura = (2 * area) / b
   return Math.ceil(altura)
}
console.log(triangle(8378, 42565))