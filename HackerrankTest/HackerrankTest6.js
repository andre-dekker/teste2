function staircase(n) {
   // Write your code here
var tag = '#';
var inputLine = '';
var inputPosition = n - 1;
 for(var lineIndex = 0; lineIndex < n; lineIndex++) {
   for(var columnIndex = 0; columnIndex < n; columnIndex++) {
      if(columnIndex < inputPosition) {
         inputLine = inputLine + ' ';
      }else {
         inputLine = inputLine + tag;
      }
   }
   console.log(inputLine);
   inputLine = '';
   inputPosition = inputPosition - 1
 }
}
staircase(10);

