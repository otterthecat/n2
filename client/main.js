var El = require('./element');

var h1 = {
	tag : 'h1',
	attributes : {
		'data-headline': 'title',
		'class': 'headline'
	},
	content : 'This is boring content :( <div class="test">Foobar</div>',
	events : {
		".test click" : function (ev) {
			'use strict';
			console.log('clicked ', ev);
		},
		mouseover : function (ev) {
			'use strict';
			console.log('over this, ', this);
		}
	}
};

var headline = new El(h1);
var a = document.querySelector('.a');
var b = document.querySelector('.b');

a.addEventListener('click', function (){
	headline.toggle('hide');
});

headline.insertAfter(b);

