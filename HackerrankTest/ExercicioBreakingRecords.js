function breakingRecords(scores) {
   var min = scores[0];
   var max = scores[0];
   var countMax = 0;
   var countMin = 0;
   
   for(var index = 0; index < scores.length; index++){
      if (scores[index] > max){
         max = scores[index];
         countMax += 1;


      } else if(scores[index] < min){
         min = scores[index];
         countMin += 1;
      }
   }
   return [countMax, countMin]

}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))