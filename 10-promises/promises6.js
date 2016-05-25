function step1() {
    // Proxy for value that's not yet available
    return new Promise(resolve => {
        // do something asynchronously
        resolve("step 1 completed");
    });
}

function step2(value) {
    return new Promise(resolve => {
        resolve(value + " step 2 completed");
    });
}

function step3(value) {
    return new Promise(resolve => {
        resolve(value + " step 3 completed");
    });
}

function step4(value) {
    return new Promise(resolve => {
        resolve(value + " step 4 completed");
    });
}

step1().then(step2)
       .then(step3)
       .then(step4)
       .then(console.log);
