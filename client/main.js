var El = require('./element');
var h1 = require('./h1');
var button = require('./button');
var bMod = require('./buttonModule');
var template = require('./template');
var view = require('./view');

var myButton = El.prototype.extend(bMod);
var btn = new myButton(button);
btn.insertAfter(document.querySelector('.c'));
btn.on('action', function(arg){
  var words = ['cat', 'dog', 'mouse'];
  t.refresh({foo: words[Math.round(Math.random() * (words.length - 1))]});
});

var a = document.querySelector('.a');
a.addEventListener('click', function (){
  'use strict';
  headline.toggle('hide');
});

var t = new template(view);
document.querySelector('.c').appendChild(t.render());
t.refresh({foo: 'stuff'});

var headline = new El(h1);
headline.insertAfter(a)
        .on('toggle', function(){
          t.refresh({foo : 'moo'});
        });
