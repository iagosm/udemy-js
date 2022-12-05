let num1 = 1
let num2 = 2

num1++ // Forma pós fixada.
console.log(num1);
--num1 //Forma pré fixada. Ela há uma precedencia maior.
console.log(num1);

console.log(++num1 === num2--) //Ele resulta no true pelo num1 está sendo feito de uma forma pré fixada. Só depois da comparação que há a decrementação
console.log(num1 === num2)