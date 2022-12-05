const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!!! Parabéns Aluno, você está aprovado!');
    }else{
        console.log('Reprovado!!! Não foi dessa vez, por gentileza realize novamente.');
    }
}

imprimirResultado(3)
imprimirResultado(8)