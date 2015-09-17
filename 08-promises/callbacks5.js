function step1(callback) {
    // Do something asynchronously
    callback("step 1 completed");
}

function step2(value, callback) {
    // Do something asynchronously
    callback(value + " step 2 completed");
}

function step3(value, callback) {
    // Do something asynchronously
    callback(value + " step 3 completed");
}

function step4(value, callback) {
    // Do something asynchronously
    callback(value + " step 4 completed");
}

// Pyramid of Doom
step1(function(value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                console.log(value4);
                // Do something with value4
            });
        });
    });
});
