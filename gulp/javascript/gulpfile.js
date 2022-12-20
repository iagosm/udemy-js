//fazer um workflow com gulp e concatenar. E dps juntar com babel e compactar
const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJs(cb){
    gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false,
        presets: ["env"],
    }))
    .pipe(uglify())//ele ira pegar todo o codigo e será minificado
    .on('error', err => console.log(err))//quando acontecer um evento,
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))

    return cb()
}

function fim(cb){
    console.log('Fim!!!!')
    return cb()
}

exports.default = series(transformacaoJs, fim)