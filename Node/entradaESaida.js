const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')// \n é quebra de linha
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data =>{ //entrar com dados via teclado. Quando o usuario aperta enter
      const nome = data.toString().replace('\n', '')//salvar o dado digitado

      process.stdout.write(`Fala  ${nome}!! \n`)
      process.exit()//interromper o precesso de forma prematura
    })
}
