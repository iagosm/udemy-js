//dependencias externas, tipo bootstrap 
const gulp = require('gulp')
//apenas um css de dependencia

function depsCSS(cb){
    return cb()
}

function depsFonts(cb){
    return cb()
}

module.exports = {
    depsCSS,
    depsFonts
}