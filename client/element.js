var EventEmitter = require('events').EventEmitter;
var util = require('util');


var applyAttributes = function (obj) {
	'use strict';

	var _this = this;
	for(var item in obj) {
		if(obj.hasOwnProperty(item)) {
			_this.setAttribute(item, obj[item]);
		}
	}
	return this;
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

var El = function (obj) {
	'use strict';

	EventEmitter.call(this);
	this.init(obj);
};

util.inherits(El, EventEmitter);

El.prototype.init = function (obj) {
	'use strict';

	this.node = document.createElement(obj.tag);
	applyAttributes.call(this.node, obj.attributes);
	this.node.innerHTML = obj.content;
	applyEvents.call(this.node, obj.events);
	return this;
};

El.prototype.append = function (targetNode) {
	'use strict';

	targetNode.appendChild(this.node);
	return this;
};

El.prototype.insertBefore = function (targetNode) {
	'use strict';

	targetNode.parentNode.insertBefore(this.node, targetNode);
	return this;
};

El.prototype.insertAfter = function (targetNode) {
	'use strict';

	this.insertBefore(targetNode.nextSibling);
	return this;
};


El.prototype.prepend = function (targetNode) {
	'use strict';

	targetNode.insertBefore(this.node, targetNode.firstChild);
	return this;
};

El.prototype.render = function () {
	'use strict';

	this.node.innerHTML(this.template.render());
	return this;
};

El.prototype.refresh = function (data, callback){
	'use strict';

	this.node.innerHTML = data;
	this.emit('refresh', this.node, data);
	callback(this.node, data);
	return this;
};

El.prototype.toggle = function (str) {
	'use strict';

	// yeah, classList isn't well supported in IE until 10
	// oh well.
	this.node.classList.toggle(str);
};

module.exports = El;
