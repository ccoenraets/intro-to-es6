"use strict";

var obj = {

    init: function init() {
        setTimeout(function () {
            this.doSomething();
        }, 1000);
    },

    doSomething: function doSomething() {
        console.log("doing something in ES5");
    }

};

obj.init();

//# sourceMappingURL=this5-compiled.js.map