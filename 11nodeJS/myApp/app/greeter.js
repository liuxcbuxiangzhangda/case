/**
 * Created by Administrator on 2017/6/7.
 */
var config = require('./config.json');
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};