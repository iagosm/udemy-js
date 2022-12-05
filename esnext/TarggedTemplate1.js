//* Template String = `${variavel}`, interpolar uma variavel dentro de uma String
//* Targged Template =  Processar Template String a partir de uma função
// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao ='Aprovado'
console.log(tag `${aluno} está ${situacao}.`)