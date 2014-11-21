var gulp = require('gulp');
var minify = require('gulp-minify-css');
var sources = require('../config/sources').public;

module.exports = function (){
	gulp.src(sources.css)
		.pipe(minify())
		.pipe(gulp.dest('./public/css'));
};
