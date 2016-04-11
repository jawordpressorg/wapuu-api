var gulp = require('gulp');
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');

gulp.task('default', function () {

var csvParseOptions = {}; //based on options specified here : http://csv.adaltas.com/parse/

    gulp.src('wapuu.csv')
        .pipe(csv2json(csvParseOptions))
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('v1'));
});
