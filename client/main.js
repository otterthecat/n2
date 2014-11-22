var Element = require('./element');

var h1 = {
	tag: 'h1',
	attributes: {
		'data-headline': 'title',
		'class': 'headline'
	},
	content: 'This is boring content'
}

var headline = new Element(h1);
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');

headline.insertAfter(b);
