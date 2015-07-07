var tags = require('./tags');
var jsx = require('jsx-runtime');

var renderer = jsx.register({
  tags: tags
});

module.exports = function(tree) {
  renderer.render(tree);
};

