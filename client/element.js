var applyAttributes = function (obj) {
	'use strict';

	for(var item in obj) {
		if(obj.hasOwnProperty(item)) {
			this.setAttribute(item, obj.item);
		}
	}
	return this;
};

var El = function (obj) {
	'use strict';

	this.init(obj);
};

El.prototype.init = function (obj) {
	'use strict';

	this.node = document.createElement(obj.tag);
	applyAttributes(obj.attributes).bind(this.node);
	return this;
};

El.prototype.append = function (el) {
	'use strict';

	el.appendChild(this.node);
	return this;
};


El.prototype.prepend = function () {
};

El.prototype.insertBefore = function () {
};

El.prototype.insertBefore = function () {
};

module.exports = El;
