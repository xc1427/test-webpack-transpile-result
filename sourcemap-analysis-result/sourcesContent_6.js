var content = require("!!../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/less-loader/dist/cjs.js!./styles.less");

if (typeof content === 'string') {
  content = [[module.id, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = require("!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}
