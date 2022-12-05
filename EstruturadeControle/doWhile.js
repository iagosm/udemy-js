//Estrutura mt pouco usada pelos programadores.
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Math.floor para arredondar
}

let opcao  // se transformar em menos 1, ele irá pular o while pq já começa em menos 1
opcao = 2  // se transformar em menos 1, ele irá pular o while pq já começa em menos 1

do  {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);
}while(opcao != -1)
console.log('Até a proxima');