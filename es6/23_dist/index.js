"use strict";

var a = 5;
var add = function add(x, y) {
    return x + y;
};

var _loop = function _loop(i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};

for (var i = 0; i < 4; i++) {
    _loop(i);
}
