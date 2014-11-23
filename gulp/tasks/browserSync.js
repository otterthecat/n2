var gulp = require('gulp')
var browserSync = require('browser-sync');
var bSyncOptions = require('../config/options').browserSync;

module.exports = function (){
	return browserSync(bSyncOptions);
};
