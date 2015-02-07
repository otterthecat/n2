module.exports = {
	tag : 'button',
	attributes : {

	},
	content : 'This is my button',
	events : {
		'click' : function(ev){
			'use strict';
			console.log('BUTTON HAS BEEN CLICKED');
		}
	},
	listeners: {
		'click': function(){
			this.emit('action', this);
		}
	}
};