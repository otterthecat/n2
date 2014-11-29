var El = require('./element');
var h1 = require('./h1');

var headline = new El(h1);
var a = document.querySelector('.a');
var b = document.querySelector('.b');

a.addEventListener('click', function (){
	'use strict';
	headline.remove();
});

headline.insertAfter(b);

setTimeout(function(){
	'use strict';
	headline.insertAfter(b);
	console.log('done');
}, 5000);

