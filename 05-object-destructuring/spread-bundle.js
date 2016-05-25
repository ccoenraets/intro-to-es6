"use strict";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var speaker = {
    firstName: "Christophe",
    lastName: "Coenraets",
    officePhone: "617-123-4567",
    mobilePhone: "617-987-6543",
    homePhone: "617-888-1234"
};

// Create Variables from Object
var firstName = speaker.firstName;
var lastName = speaker.lastName;

var phoneNumbers = _objectWithoutProperties(speaker, ["firstName", "lastName"]);

console.log(firstName);
console.log(lastName);
console.log(phoneNumbers);
