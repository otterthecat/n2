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
  model: {
  	foo: 'doo'
  },
  events: {
	'a click': function (ev) {
		ev.preventDefault();
		alert('template link clicked!');
	}
  },
  content : '<p data-template="foo"></p><a href="#">test link</a>'
});

a.appendChild(t.render());

headline.insertAfter(a);

