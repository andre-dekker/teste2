function vowel_count(str) {
   'use strict';
   if(typeof str != 'string') {
      return false;
   }
   var count = 0;
   var pattern = /[aeiou]/i;
   for(var i = 0; i < str.length; i++) {
      if(str[i].match(pattern)) {
         count++;
      }
   } return count;
}
var sentence = 'This should have 9 vowels in it';
var output = vowel_count(sentence);
console.log(output);