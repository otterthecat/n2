var L = require('./element');
var util = require('util');

var Template = function (obj) {
	'use strict';
	obj.tag = 'template';
	L.call(this, obj);

};

util.inherits(Template, L);

var applyTemplate = function (model, dom) {
	'use strict';
	console.log('dom', dom);
	var selectors = dom.content.querySelectorAll('[data-template]');
	console.log('model', model);
	console.log('selectors', selectors);
};

Template.prototype.load = function () {
	'use strict';

	this.node.innerHTML = '<p id="tt" data-content="bar"></p>';
	this.clone = document.importNode();
};

Template.prototype.render = function (data) {
	'use strict';

	applyTemplate(data, this.node);
};

module.exports = Template;
