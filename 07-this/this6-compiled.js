"use strict";

var obj = {

    init: function init() {
        var _this = this;

        setTimeout(function () {
            return _this.doSomething();
        }, 1000);
    },

    doSomething: function doSomething() {
        console.log("doing something in ES6");
    }

};

obj.init();

//# sourceMappingURL=this6-compiled.js.map