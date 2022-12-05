//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z'// *Não faça isso !!!!


const avo = { attr1: 'A'}

const pai = {__proto__: avo, attr2 : 'B' }

const filho = {__proto__: pai, attr3:'C'}

console.log(filho.attr0);//Ele vai achar pq o Avo aponta para o Object.prototype
console.log(filho.attr1, filho.attr2, filho.attr3);//irá puxar da herança avo


//Exemplo um pouco mais complexo

const carro = {
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta //pode acelerar
        }else{//limitar no maximo
            this.velAtual = this.velMax
        }
},
status(){
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
}
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        //*super para referenciar o prototipo*
        return `${this.modelo}:${super.status()}`
    }
}

const uno = {
    modelo : 'Duas Portas',
    velMax: 150
}


//* Definindo relação de prototipo 
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
Object.setPrototypeOf(uno,carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status());
ferrari.acelerarMais(320)
console.log(ferrari.status());
uno.acelerarMais(120)
console.log(uno.status());