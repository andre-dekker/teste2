function birthdayCakeCandles(candles) {
   // Write your code here
var bigCandle = 0;
var count = 0;

candles.sort((a, b) => b - a);
bigCandle = candles[0];

candles.forEach((candles) => {
   if(candles === bigCandle) {
      count += 1;
   }
});


return count;


}
console.log(birthdayCakeCandles([3, 2, 1, 3]))