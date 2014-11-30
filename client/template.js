var L = require('./element');
var util = require('util');

var Template = function (obj) {
	'use strict';
	obj.tag = 'template';
	this.body = document.querySelector('body');
	L.call(this, obj);

};

util.inherits(Template, L);

var nodeListToArray = function (nList) {
	'use strict';

	return [].slice.call(nList);
};

var applyTemplate = function (model, dom) {
	'use strict';
	var selectors = dom.content.querySelectorAll('[data-template]');
	var selectorArray = nodeListToArray(selectors);
	selectorArray.map(function(item){
		item.innerHTML = model[item.getAttribute('data-template')];
	});

	return document.importNode(dom.content, true);
};

Template.prototype.load = function () {
	'use strict';

	this.node.innerHTML = '<p id="tt" data-content="bar"></p>';
	this.clone = document.importNode();
};

Template.prototype.render = function (target, data) {
	'use strict';
	this.body.appendChild(this.node);
	target.appendChild(applyTemplate(data, this.node));
};

module.exports = Template;
