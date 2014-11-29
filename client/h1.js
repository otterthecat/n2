module.exports = {
	tag : 'h1',
	attributes : {
		'data-headline': 'title',
		'class': 'headline'
	},
	content : 'This is boring content :( <div class="test">Foobar</div>',
	events : {
		'.test click' : function (ev) {
			'use strict';
			console.log('clicked ', ev);
		},
		mouseover : function () {
			'use strict';
			console.log('over this, ', this);
		}
	}
};
