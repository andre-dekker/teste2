function compareTriplets(a, b) {
   // Write your code here
   var alice = 0;
   var bob = 0;
for(var index = 0; index < a.length; index++) {
if(a[index] > b[index]) {
   alice = alice + 1
   } else if(b[index] > a[index]) {
   bob = bob + 1   
   }

}
return [alice, bob]
}







console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
