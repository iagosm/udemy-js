function compras(trabalho1, trabalho2){
    //. todos são operadores logicos 
    const comprarSorvete = trabalho1 || trabalho2 // Operação do tipo ou
    const comprarTv50 = trabalho1 && trabalho2 // Operação do tipo E. Chamados de operador curto circuito, se o primeiro parametro estiver certo ou errado, ele apenas não verifica o segundo
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1!= trabalho2 //trabalho 1 diferente de trabalho 2.
    const manterSaudavel = !comprarSorvete //Negação Logica. Operador unario

    //no javascript só tem como retornar um, por isso criamos um objeto para enviar os 4 resultados. Objeto é uma coleção de chave valor.
    return {comprarSorvete,comprarTv50, comprarTv32,manterSaudavel}
}

console.log(compras(true,true)); //Os dois ultimos acabam sendo negados
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));