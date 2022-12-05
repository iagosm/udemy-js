const a = 1 
const b = 2 
const c = 3

const obj1 = {a : a, b:b, c:c}
//Foi atualizado e fica mais facil criar um objeto pq ele automaticamente fica com o nome do objeto
const obj2 = {a,b,c}
console.log(obj1,obj2);

//Criar dinamicamente um objeto com string
const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)//Verão mais nova



const obj5 = {
//Definir funções dentro de um objeto literal
    funcao1: function(){
        //
    },
    //forma nova. Reduzida e mais curta para definir uma função
    funcao2(){
        //...
    }
}

console.log(obj5);