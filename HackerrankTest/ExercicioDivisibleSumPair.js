function divisibleSumPairs(n, k, ar) {
   var sum = 0
   for(var index = 0; index < ar.length; index++){
      for(var pair = 0; pair < ar.length; pair ++){
         if(index != pair){
            if((ar[index] + ar[pair]) % k === 0){
               sum += 1
            }
         }
      }
   }
   return sum / 2
}
         
         


console.log(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4,]));
// 5