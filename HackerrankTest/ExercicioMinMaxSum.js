function miniMaxSum(arr) {
   // Write your code here
var maxValue = 0;
var minValue = 0;
var maxSum = 0;
var minSum = 0;

arr.sort((a, b) => a - b);
minValue = arr[0];
maxValue = arr[arr.length - 1];

for(var index = 0; index < arr.length; index++) {
   maxSum = maxSum + arr[index]
   minSum = minSum + arr[index]
}

console.log(minSum - maxValue , maxSum -minValue)

}
miniMaxSum([7, 69, 2, 221, 8974])