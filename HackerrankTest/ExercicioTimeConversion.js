function timeConversion(s) {
   s.split('');

   var hours = parseInt(s[0] + s[1]);
   var minutes = s[3] + s[4];
   var seconds = s[6] + s[7];
   var ampm = s[s.length - 2]

   if(hours >= 12 && ampm === 'A') {
      hours = hours - 12;
   } else if(hours < 12 && ampm === 'P'){
      hours = hours + 12
   }
   if(hours < 10){
      return (`0${hours}:${minutes}:${seconds}`);
   }else {
      return (`${hours}:${minutes}:${seconds}`);
   }
}
console.log(timeConversion('12:40:22AM'))
