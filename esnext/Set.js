//* Não aceita repetição/ não indexada
const times = new Set()
times.add('Vasco')
// Pode incadear chamadas
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
// Mostrando que não aceita repetições, só será ignorado
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))//Irá dar falso pq o V ta minusculo
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))//False pq foi excluido

// Criar um Set como uma Matriz
const nomes = ['Raquel','Lucas','Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)