module.exports = {
  readNode: function(selector){
    'use strict';

    var nodeList = document.querySelectorAll(selector);
    for(var i = 0; i < nodeList.length; i += 1){
      console.log('found node ', nodeList[i]);
    }
  },
  init: function(){
    'use strict';
    console.log('this is a test of the emergency broadcast system');
  }
};