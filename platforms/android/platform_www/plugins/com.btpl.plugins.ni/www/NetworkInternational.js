cordova.define("com.btpl.plugins.ni.NetworkInternational", function(require, exports, module) {
var exec = require('cordova/exec');

exports.makePayment = function (arg0, success, error) {
    exec(success, error, 'NetworkInternational', 'makePayment', [arg0]);
};

});
