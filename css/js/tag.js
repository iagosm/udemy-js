// Associar a cada elemento aparecendo uma tag do lado

const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span:'#e53935',
    section:'#f67809',
    ul: '#5e35b1',
    ol:'#fbc02d',
    header:'#d81b60',
    nav:'#64dd17',
    main:'#00acc1',
    footer:'#304ffe',
    form:'#9f6581',
    body:'#25b6da',
    padrao: '#616161',
    // Pegar a tag e dar cor
    get(tag){
        return this[tag] ? this[tag]:this.padrao //se existir ele retorna this.tag se n ele retorna this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){ //Se não tiver essa class css. Está contido na lista de class o nolabel?Se estiver contido, não entre!
        const label = document.createElement('label') //injetar em todos as elemento que tem a .tag, vai injetar essa label
        label.style.backgroundColor = colors.get(tagName) 
        label.innerHTML = tagName //Colocando o nome da tag dentro do label
        elemento.insertBefore(label,elemento.childNodes[0]) //inserir antes do primeiro elemento q tiver do elemento box
    }
})  