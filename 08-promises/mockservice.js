var employees = [
    {name: "John"}
];

function findAll() {
    return new Promise(function (resolve, reject) {
        if (employees) {
            resolve(employees);
        } else {
            reject("employees is not defined");
        }
    });
}

findAll()
    .then(function(employees) {
        console.log(employees);
    })
    .catch(function(error) {
        console.log(error);
    });
