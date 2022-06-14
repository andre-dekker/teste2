function aVeryBigSum(ar) {
   // Write your code here.
var soma = 0
for(var index = 0; index < ar.length; index++) {
   soma = soma + ar[index];
}
return soma
}
console.log(aVeryBigSum([1, 2, 3, 5]))