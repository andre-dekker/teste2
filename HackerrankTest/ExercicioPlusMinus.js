function plusMinus(arr) {
   var zeros = 0
   var negatives = 0
   var positives = 0
   
   for(var index = 0; index < arr.length; index++){
      if(arr[index] === 0){
         zeros += 1
      } else if (Math.sign(arr[index]) === -1){
         negatives += 1
      } else if(Math.sign(arr[index]) === 1) {
         positives += 1
      }
   }
   var positive = (positives / arr.length).toFixed(6)
   var negative = (negatives / arr.length).toFixed(6)
   var zero = (zeros / arr.length).toFixed(6)
   console.log(positive)
   console.log(negative)
   console.log(zero)
}
plusMinus([-4, 3, -9, 0, 5, 2])