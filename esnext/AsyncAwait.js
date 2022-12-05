// Recurso do E8
// Objetivo de simplificar o uso de promises ...
const nomeDasTurmasA = 0
const nomeDasTurmasB = 0
const nomeDasTurmasC = 0
let obterAlunos = async() =>{
    const ta = await nomeDasTurmasA('A')
    const tb = await nomeDasTurmasB('B')
    const tc = await nomeDasTurmasC('C')
    return [].concat(ta,tb,tc)
}//Retorna um objeto AsyncFunction

obterAlunos().then()