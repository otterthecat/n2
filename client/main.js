var El = require('./element');
var h1 = require('./h1');
var template = require('./template');

var headline = new El(h1);
var a = document.querySelector('.a');
var b = document.querySelector('.b');

a.addEventListener('click', function (){
	'use strict';
	headline.remove();
});

var t = new template({
  tag: 'div',
  attributes: {
	'id' : 'test-template'
  },
  content : '<p data-template="foo"></p>'
});

t.render(a, {foo: 'bar'});

headline.insertAfter(b);

setTimeout(function(){
	'use strict';
	headline.insertAfter(b);
	console.log('done');
}, 5000);

