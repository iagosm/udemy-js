const schedule = require('node-schedule')

// 5 seria de 5 em segundos, o 17 = horario e o 6 define o dia = sabado
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 6', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)// vai ser cancelado dps de 20 segundos

// setImmediate =
// setInterval =

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 5
regra.second = 0

const tarefa2 = schedule.Job(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})