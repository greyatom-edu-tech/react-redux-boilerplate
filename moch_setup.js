import { jsdom } from 'jsdom';

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.window.matchMedia = global.window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {},
  };
};

global.navigator = {
  userAgent: 'node.js',
};
