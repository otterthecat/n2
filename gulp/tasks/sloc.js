var gulp = require('gulp');
var sloc = require('gulp-sloc');
var sources = require('../config/sources').js;

module.exports = function () {
	'use strict';

	return gulp.src(sources)
			.pipe(sloc());
};
