const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const { transform } = require('lodash')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src()
    .pipe(tsProject())//realizar projeto de compilação
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)