//JavaScript Object Notation é um formato textual
//Json usado para interoperabilidade de sistemas
//Objeto simples transformando ele em JSON e a funçãoo não estará presente

const obj = {a:1, b:2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)); //transformando em JSON string

//transformando JSON em OBJT
//OS comentados abaixo não irão funcionar pq o nome do atributo deve ser delimitado por aspas duplas
//console.log(JSON.parse("{a:1, b:2, c:3}"));
// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"));
//OBJETO Gerado a partir de um texto
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));
//Curiosidades do JSON
console.log(JSON.parse('{"a":"qualquer coisa","b":"true", "d":{},"e": [] }'));