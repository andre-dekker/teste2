function diagonalDifference(arr) {
   // Write your code here
   var primaryDiagonal = 0
   var secondaryDiagonal = 0
   for(var index = 0; index < arr.length; index++){
      primaryDiagonal = primaryDiagonal + arr[index][index];
      secondaryDiagonal = secondaryDiagonal + arr[index][arr.length - 1 - index];
   }
return Math.abs(primaryDiagonal - secondaryDiagonal)


}

console.log(diagonalDifference([
   [1, 2, 3], 
   [4, 5, 6], 
   [7, 8, 9]]))