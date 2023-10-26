function saldoVitorias(vitorias,derrotas){
let saldoVitorias = vitorias - derrotas
elo(saldoVitorias)
}
function elo(saldoVitorias){
if (saldoVitorias <= 10) {
  nivel = "Ferro"
} else if (saldoVitorias <= 2000) {
  nivel = "Bronze"
} else if (saldoVitorias <= 6000) {
  nivel = "Prata"
} else if (saldoVitorias <= 7000) {
  nivel = "Ouro"
} else if (saldoVitorias <= 8000) {
  nivel = "Diamante"
} else if (saldoVitorias <= 9000) {
  nivel = "Lendário"
} else if (saldoVitorias <= 10000) {
  nivel = "Imortal"
}

return (console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`))
}

let resultado = saldoVitorias(100,50)
