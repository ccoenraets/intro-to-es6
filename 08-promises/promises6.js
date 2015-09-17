function step1() {
    return new Promise(resolve => {
        resolve("step 1 ok");
    });
}

function step2(value) {
    return new Promise(resolve => {
        resolve(value + " step 2 ok");
    });
}

function step3(value) {
    return new Promise(resolve => {
        resolve(value + " step 3 ok");
    });
}

function step4(value) {
    return new Promise(resolve => {
        resolve(value + " step 4 ok");
    });
}

step1().then(step2)
       .then(step3)
       .then(step4)
       .then(console.log);
