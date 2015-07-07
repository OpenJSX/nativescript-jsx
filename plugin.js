var gen = require('babel-plugin-jsx');
var tags = require('./tags');

tags = Object.keys(tags).filter(function(tag) {
  return tag !== '*';
});

module.exports = gen({
  captureScope: true,
  builtins: tags
});