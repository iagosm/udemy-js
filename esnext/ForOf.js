//* For in = intera em cima de indice
//* For OF = intera em cima de valores e acaba se tornando mais interessante
for(let letra of "Cod3r"){
    console.log(letra, ".For Of")
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for(let i in assuntoEcma){
    console.log(i, ".For In");
}

for(let assunto of assuntoEcma){
    console.log(assunto, ".For Of");
}

const assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}]
])

for(let assunto of assuntosMap){
    // forma para receber chave e valor
    console.log(assunto)
}

for(let chaves of assuntosMap.keys()){
    // forma para percorrer todas as chaves
    console.log(chaves)
}

for(let valor of assuntosMap.values()){
    //forma para saber os valores 
    console.log(valor)
}

// * Forma para percorrer as entradas MAp
// *Desestruturando 
for (let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

// * Percorrer as entradas do Set
const s = new Set(['a','b', 'c'])
for( let letra of s){
    console.log(letra);
}
