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

module.exports = El;
