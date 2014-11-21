var gulp = require('gulp');
var dox = require('gulp-dox');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var fs = require('fs');
var sources = require('../config/sources');

var stripNames = function(list){
	for(var i = 0; i < list.length; i += 1){
		list[i] = list[i].replace('.json', '');
	}
	return list;
};

module.exports = function (){
	gulp.src(sources.js)
		.pipe(dox())
		.pipe(gulp.dest(sources.documentation.data))
		.on('finish', function (){
			fs.readdir(sources.documentation.data, function (err, docs){
				docs.forEach(function (jsn){
					jsn = jsn.replace('.json', '');
					gulp.src(sources.documentation.template)
					.pipe(rename(jsn +'.html'))
					.pipe(jade({
						locals: {
							current: jsn,
							docs: require('../../' + sources.documentation.data + jsn),
							files: stripNames(docs)
						}
					}))
					.pipe(gulp.dest('./docs/html/pages/'));
				});
				// add index page
				gulp.src(sources.documentation.index)
					.pipe(jade({
						locals: {
							pages: docs
						}
					}))
					.pipe(gulp.dest('./docs/html/'));
			});
		});
};
