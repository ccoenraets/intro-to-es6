var obj = {

    init: function () {
        console.log("waiting 2 seconds");
        var self = this;
        setTimeout(function() {
            self.doSomething();
        }, 2000);
    },

    doSomething: function() {
        console.log("doing something in ES5");
    }

};

obj.init();