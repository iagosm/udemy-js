//Operadores relacionais e tbm binarios
//== é igual ao numero
// === extretamente igual ao numero
// .!= diferente
//.!== extretamente diferente
console.log('01)', '1' == 1)
console.log('02)', '2' === 2) //Será falso pq um é uma string e outro é um numero
console.log('03)', '3' != 3); //Vai dar falso pq são iguais, não está comparando o tipo, apenas o valor
console.log('04)', '4' !==4); // Vai dar true pq um é tipo nunber e outro é string

// Teste Menor que / Maior que

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);


// Teste com Data.

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2 ); // Os dois irão dar falso, irão comparrar referencia de memoria
console.log('10)', d1 == d2 ); // Os dois irão dar falso, irão comparrar referencia de memoria
console.log('11)', d1.getTime() === d2.getTime() ); // Verdadeiro pq combara o number com valor

 console.log('12)', undefined == null );
console.log('13)', undefined === null);