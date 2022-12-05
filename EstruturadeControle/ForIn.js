const notas = [6.7, 7.4, 9.8, 8.1, 7.1]

for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome:'Iago',
    sobrenome:'Sousa',
    idade:22,
    peso:67,
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
