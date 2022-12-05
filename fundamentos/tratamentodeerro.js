//TRY /  CATCH / THROW
//evite mostrar detalhes de infroestrutura para o usuario. Jogue uma mensagem de generica para o usuario.
function tratarErroELancar(erro){
    // throw new Error('Ocorreu um erro de Processamento')
    // throw 10
    // throw true
    // throw 'mensagem'
    //Throw é para lançar erro
    throw{
        nome: erro.name,
        msg: erro.message,
        date:new Date
    }
}

function imprimirNomeGritado(obj){
    //
    try{ 
    console.log(obj.name.toUpperCase()+'!!!');
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('final');
    }
}


// const obj = { nome:'Roberto' }
const obj = { name:'Roberto' }
imprimirNomeGritado(obj)