//Array em Javascript é um objeto especial com caracteristicas proprias. 
//*Array é uma estrutura heterogenea. Pode adicionar qualquer tipo de elemento.
//A boa pratica indica trabalharem com o mesmo tipo de arra
console.log(typeof Array,typeof new Array, typeof []);

//Forma não tão recomendada de criar Array mas é uma forma valida
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados);


//Forma Recomendada. Forma literal
aprovados = ['Bia','Carlos','Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);//Não existe no array, então irá dar como Undefined. Em outras liguagens daria erro


//Forma valida de adicionar um novo elemento no Array
//*Essa forma é a mais comum para substituir um elemento
aprovados[3] = 'Paulo'
console.log(aprovados[3]);
//Outra forma para adicionar um elemento na ultima posição do Array
aprovados.push('Matheus')
console.log(aprovados.length);
console.log(aprovados);

//Maneira de adicionar um elemento e deixar outros vazios
aprovados[9] = 'Rafael'
console.log(aprovados.length);//Terá 10 porém 4 são vazios
console.log(aprovados[8] === undefined); //True pois não foi definido o elemento
console.log(aprovados);

//Função para fazer alteração no Array.
aprovados.sort()
console.log(aprovados);

//Deletar arrays
delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

//*Splice ele pode adicionar ou remover elementos de um Array. Ela pode remover e adicionar ao mesmo tempo
aprovados = ['Thiago', 'André','Gustavo','Felipe'];
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados);