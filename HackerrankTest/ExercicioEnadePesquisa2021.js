function pesquisa(alturas){
   var maisAlto = 0;
   var maisBaixo = 0;
   var somaMedidas = 0;
   var pequenos = 0
   alturas.sort((a, b) => a - b);
   maisAlto = alturas[alturas.length - 1];
   maisBaixo = alturas[0];

   for(var index = 0; index < alturas.length; index++){
      somaMedidas = somaMedidas + alturas[index]
      
   }
   var media = (somaMedidas / alturas.length).toFixed(2);

   for(var index = 0; index < alturas.length; index++){
      if(alturas[index] < media){
         pequenos += 1         
      }
   }
   console.log(maisAlto, maisBaixo, media, pequenos)
}
pesquisa([1.80, 1.67, 1.90, 2.03])
