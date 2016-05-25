var colors = ["red", "green", "blue", "yellow"];

// Create Variables from Array using Spread Operator
var [primaryColor, secondaryColor, ...otherColors] = colors;

console.log(primaryColor);
console.log(secondaryColor);
console.log(otherColors);