var speaker = {
    firstName: "Christophe",
    lastName: "Coenraets",
    officePhone: "617-123-4567",
    mobilePhone: "617-987-6543",
    homePhone: "617-888-1234"
};

var {firstName, lastName, ...phoneNumbers} = speaker;

console.log(firstName);
console.log(lastName);
console.log(phoneNumbers);