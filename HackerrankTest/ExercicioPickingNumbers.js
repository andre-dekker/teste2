function pickingNumbers(a) {
   let sortedArray = a.sort(function(a,b){
      return(a - b);
  })
  
  let currentArray = [];
  let longestArray = 0;
  let startNumber = 0;
  for(let i = 0; i < sortedArray.length; i++){
      let result = Math.abs(sortedArray[startNumber] - sortedArray[i]);
      if (result <= 1){
          currentArray.push(sortedArray[i]);
          if(currentArray.length > longestArray){
                  longestArray = currentArray.length
              };
      }else {
  
          startNumber = i;
          if(currentArray.length > longestArray){
              longestArray = currentArray.length
          }
          currentArray = [];
          currentArray.push(sortedArray[i]);
      }
  
  }
  return longestArray;
}

console.log(pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2]))
// 3