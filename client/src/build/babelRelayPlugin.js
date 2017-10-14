var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('./schema.json');
console.log(schema.data);
module.exports = getbabelRelayPlugin(schema.data);