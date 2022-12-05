const notas = [7.7, 6.5, 7.5,4.3,8.9,2.4,1.9,10]

//Sem CallBack
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1+ ' Sem CallBack');


//Com CallBack
//filter função q vai filtrar algo
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2);

//callback com Arrow Function

const notasMenorQue7 = notas < 7
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3,' Callback Arrow Function');