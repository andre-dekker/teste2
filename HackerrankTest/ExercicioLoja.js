function formaDePagamento(a){
var preço = a
var aVista = preço * 0.9
var Parcelado = preço / 3
console.log('Preço: R$ ' + preço)
console.log('A vista: R$ ' + aVista)
console.log('Parcelado: 3x de R$ ' + Parcelado)
}
formaDePagamento(80)
