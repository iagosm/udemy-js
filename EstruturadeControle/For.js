let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`);
    contador++
}

for(var i = 1; i <= 10; i++){
    console.log(i);
}

//Ambos irão repetir mais vezes da mesma forma

const notas = [6.8, 7.4, 9.8, 8.1, 7.7]
//length é o comprimento do array
//Leitura de um array usando for
for(let i = 0; i < notas.length; i++){
    console.log(`Notas = ${notas[i]}`);
}