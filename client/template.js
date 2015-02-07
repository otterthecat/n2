var L = require('./element');
var util = require('util');

var Template = function (obj) {
	'use strict';
	obj.tag = 'template';
	this.events = obj.events;
	this.model = obj.model;
	this.body = document.querySelector('body');
	L.call(this, obj);
	this.template = this.node;

};

util.inherits(Template, L);

// TODO - extract to file
var nodeListToArray = function (nList) {
	'use strict';

	return [].slice.call(nList);
};

var applyEvents = function (obj) {
	'use strict';
	for(var ev in obj) {

		var lastIndex = ev.lastIndexOf(' ');
		if(lastIndex < 0){
			this.addEventListener(ev, obj[ev]);
		}
		else {
			var nodeArray = [].slice.call(this.querySelectorAll(ev.substr(0, lastIndex)));
			nodeArray.forEach(function (el){
				el.addEventListener(ev.substr(lastIndex + 1), obj[ev]);
			});
		}
		this.addEventListener(ev, obj[ev]);
	}
	return this;
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

	// TODO - use ajax call to fetch external template file`
	this.node.innerHTML = '<p id="tt" data-content="bar"></p>';
	this.clone = document.importNode();
};

Template.prototype.render = function (data) {
	'use strict';
	this.body.appendChild(this.template);
	// NOTE: the returned value will be a document fragment,
	// and thus should not be added within an element using
	// innerHTML/contentText but rather appendChild (for example)
	this.node = applyTemplate(data || this.model, this.template).firstElementChild;
	this.emit('render', data);
	return applyEvents.call(this.node, this.events);
};

Template.prototype.refresh = function (data) {
	'use strict';
	var newRender = applyTemplate(data || this.model, this.template).firstElementChild;
	applyEvents.call(newRender, this.events);
	this.node.parentNode.replaceChild(newRender, this.node);
	this.emit('refresh', data);
	this.node = newRender;
};

module.exports = Template;
