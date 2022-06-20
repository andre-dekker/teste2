function vezesLetraAparece(frase, letra) {
   var contador = 0
       for(var index = 0; index < frase.length; index++){
       if(frase[index] == letra){
           contador += 1
       }        
   }
   if(letra == 'a'){
       return letra + " é uma vogal e aparece " + contador + " vezes na frase"
   } else if(letra == 'e'){
      return letra + " é uma vogal e aparece " + contador + " vezes na frase"
   } else if(letra == 'i'){
      return letra + " é uma vogal e aparece " + contador + " vezes na frase"
   } else if(letra == 'o'){
      return letra + " é uma vogal e aparece " + contador + " vezes na frase"
   } else if(letra == 'u'){
      return letra + " é uma vogal e aparece " + contador + " vezes na frase"      
   } else {
       return letra + " é uma consoante e aparece " + contador + " vezes na frase"
   }
}
console.log(vezesLetraAparece("The greatest glory in living lies not in never falling, but in rising every time we fall",'z'))