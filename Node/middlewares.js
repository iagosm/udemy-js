// Middleware pattern(chain of responsibily)

//Ctx é um objeto que será passado de um passo para o outro
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length && //verificar se o indice é menor q o comprimento
            middlewares[indice](ctx, () =>execPasso(indice +1)) 
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);