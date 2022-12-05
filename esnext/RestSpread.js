//* Operador Rest(juntar) e Spread(espalhar)
// Rest é quando queremos agrupar uma estrutura.
// Spread é quando queremos espalhar

// *Usar spread com Objeto
const funcionario = {nome:'Maria',salario:1444.90}
const clone = { ativo:true, ...funcionario}//Pegando todos os atributos de funcionarios e espalhando com tres pontos
console.log(clone)

// *Usando Spread com Array
const grupoA =['João','Pedro','Gloria']
const grupoFinal =['Marcos','Lucas', ...grupoA]
console.log(grupoFinal)


//*Usando Rest como parametro de função

// Operador Rest = Agrupar varios parametros em um Array
function total(...numeros){
    let total = 0
    // Atribuição aditiva em cima da variavel total para cada um dos elementos chamados numeros
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))//A soma de todos os numeros