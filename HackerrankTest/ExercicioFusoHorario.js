function fusoHorario(a, b, c){
var horas = a
var minutos = b
var fuso = c
if(horas + fuso > 24){
  return horas - 24 + fuso + ':' + minutos
} else if(minutos <= 9 ) {
return horas + fuso + ':' + '0' + minutos
} else if(fuso < 0) {
   return horas + fuso + ':' + minutos
  }  else {
   return horas + fuso + ':' + minutos

  }
} 


//alemanha - 
//argentina - ?
//fuso - -5



console.log(fusoHorario(4, 20, -3))
