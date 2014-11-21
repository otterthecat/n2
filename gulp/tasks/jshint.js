/*
	Use of this task assumes a .jshintrc file in the
	same directory as your gulpfile.js

	More Information:
		https://www.npmjs.org/package/gulp-jshint
		http://www.jshint.com/docs/
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sources = require('../config/sources').js;

module.exports = function () {
	'use strict';

	return gulp.src(sources)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
};
