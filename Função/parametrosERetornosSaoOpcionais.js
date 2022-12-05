function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`);
    }else{
        return area
    }
}
console.log(area(20,20));
console.log(area(2,2));
console.log(area(2));
console.log(area(2,2,7,13,2,44));
console.log(area(5,5));