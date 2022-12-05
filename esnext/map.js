const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('angular',{framework: true})

//* Forma correta de acessar com o map
console.log(tecnologias.get('React'));
console.log(tecnologias.get('React').framework);
console.log(tecnologias.get('angular').framework);



const chavesVariadas = new Map([
    [function () { },'Função'],
    [{},'Objeto'],
    [123, 'Número'],
])


// Callback
chavesVariadas.forEach((vl,ch) =>{
    console.log(ch,vl);
})

// has. é a função se o elemento está o unão contindo no elemento
console.log(chavesVariadas.has(123)) //true ou falso. irá verficar se há o elemento nesse objeto
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))//False pq foi excluido

console.log(chavesVariadas.size) //Tamanho dos elementos no objeto

// Vc pode ter repetição no valor mas não na chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

