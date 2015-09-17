var obj = {

    init: function() {
        console.log("waiting 2 seconds");
        setTimeout(() => this.doSomething(), 2000);
    },

    doSomething: function() {
        console.log("doing something in ES6");
    }

};

obj.init();