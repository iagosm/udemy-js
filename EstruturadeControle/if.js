function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Parabéns, você está aprovado com a nota  ' +  nota);
     }if (nota <= 6){
        console.log('Reprovado, você está reprovado com a nota ' +  nota + '. Deverá refazer a prova.');

     }
}

soBoaNoticia(8.1)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log('É verdade ... ' + valor);
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
