var El = require('./element');
var h1 = require('./h1');
var template = require('./template');

var headline = new El(h1);
var a = document.querySelector('.a');

a.addEventListener('click', function (){
	'use strict';
	headline.toggle('hide');
});

var t = new template({
  tag: 'div',
  attributes: {
	'id' : 'test-template'
  },
  content : '<p data-template="foo"></p>'
});

a.appendChild(t.render({foo : 'bar'}));

headline.insertAfter(a);

