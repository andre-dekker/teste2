function formaDePagamento(a){
var preço = a
var aVista = preço * 0.9
var Parcelado = preço / 3
console.log('Preço: R$ ' + preço.toFixed(2))
console.log('A vista: R$ ' + aVista.toFixed(2))
console.log('Parcelado: 3x de R$ ' + Parcelado.toFixed(2))
}
formaDePagamento(38)
