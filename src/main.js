const config = require('./config');

var methods = {
    methodA: function () {
        return 'methodA-response';
    },
    methodB: function (arg) {
        return 'methodB-' + String(arg);
    },
    methodC: function () {
        return config.SOME_ENV_VARIABLE;
    },
};

module.exports = methods;
