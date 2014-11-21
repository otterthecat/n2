var gulp = require('gulp');
var uglify = require('gulp-minify-html');
var sources = require('../config/sources').public;

module.exports = function (){
	gulp.src(sources.html)
		.pipe(uglify())
		.pipe(gulp.dest('./public/html'));
};
