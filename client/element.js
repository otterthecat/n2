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

var applyListeners = function (obj){
	'use strict';

	var _this = this;
	if (typeof obj === 'undefined'){
		return false
	}
	for(var ev in obj){
		_this.on(ev, obj[ev]);
	}
	return _this;
};

var applyEvents = function (obj) {
	'use strict';
	var _this = this;
	for(var ev in obj) {

		var lastIndex = ev.lastIndexOf(' ');
		if(lastIndex < 0){
			_this.node.addEventListener(ev, function(e){
				obj[ev](e);
				_this.emit(ev, e, _this);
			});
		}
		else {
			var nodeArray = [].slice.call(_this.node.querySelectorAll(ev.substr(0, lastIndex)));
			nodeArray.forEach(function (el){
				el.addEventListener(ev.substr(lastIndex + 1), function(e){
					//use defined callback on node
					obj[ev](e);

					// have object emit event
					_this.emit(ev, e, _this);
				});
			});
		}
	}
	return _this;
};

var El = function (obj) {
	'use strict';

	var _this = this;
	EventEmitter.call(this);
	_this._init(obj);
};

util.inherits(El, EventEmitter);

El.prototype._init = function (obj) {
	'use strict';

	this.node = document.createElement(obj.tag || 'div');
	applyAttributes.call(this.node, obj.attributes);
	this.node.innerHTML = obj.content;
	applyEvents.call(this, obj.events);
	applyListeners.call(this, obj.listeners);

	// call user defined init
	if(typeof this.init === 'function') {
		this.init.call(this, obj);
	}
	return this;
};

El.prototype.extend = function(obj){

	var newEl = function(obj){
		El.call(this, obj);
	};

	newEl.prototype = Object.create(El.prototype);

	for(item in obj){
		if(!newEl.prototype.hasOwnProperty(item)){
			newEl.prototype[item] = obj[item];
		}
		else {
			console.log('You are trying to override an object in El: ', item);
		}
	}
	newEl.prototype.constructor = newEl;
	return newEl;
};

El.prototype.append = function (targetNode) {
	'use strict';

	targetNode.appendChild(this.node);
	this.emit('append', this);
	return this;
};

El.prototype.insertBefore = function (targetNode) {
	'use strict';

	targetNode.parentNode.insertBefore(this.node, targetNode);
	this.emit('insertBefore', this);
	return this;
};

El.prototype.insertAfter = function (targetNode) {
	'use strict';

	this.insertBefore(targetNode.nextSibling);
	this.emit('insertAfter', this);
	return this;
};

El.prototype.prepend = function (targetNode) {
	'use strict';

	targetNode.insertBefore(this.node, targetNode.firstChild);
	this.emit('prepend', this);
	return this;
};

El.prototype.remove = function () {
	'use strict';

	this.node.remove();
	this.emit('remove', this.node);
	return this;
};

El.prototype.render = function () {
	'use strict';

	this.node.innerHTML(this.template.render());
	this.emit('render', this.node);
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
	this.emit('toggle', this);
};

module.exports = El;
