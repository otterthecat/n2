module.exports = {
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
  content : '<div><p data-template="foo"></p><a href="#">test link</a></div>',
  listeners: {
    'refresh': function(data){
        console.log('refreshed with ', data);
    }
  }
};