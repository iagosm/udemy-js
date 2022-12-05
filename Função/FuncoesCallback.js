//  
const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome,indice){
    console.log(`${indice + 1}.${nome}`);
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante);
 })
//transformando em função arrow
fabricantes.forEach( fabricante => console.log('Arrow Function: => '+fabricante))