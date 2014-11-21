var gulp = require('gulp')
var browserSync = require('browser-sync');

module.exports = function (){
	return browserSync({
				proxy: 'localhost/github/big-gulp/public'
			});
};
