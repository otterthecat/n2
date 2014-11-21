var gulp = require('gulp');
var sources = require('../config/sources');
var options = require('../config/options');
var browserSync = require('browser-sync');

module.exports = function () {

	browserSync({
		proxy: options.browserSync.proxy
	});

	return gulp.watch(
			[sources.js, sources.test, sources.less],
			['jshint', 'jscs', 'mocha', 'browserify', 'less', browserSync.reload]
		);
};
