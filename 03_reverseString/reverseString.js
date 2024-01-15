const reverseString = function(str) {

let splitString = str.split("");
console.log(splitString);

let reverseString = splitString.reverse();
console.log(reverseString);

let joinString = reverseString.join('');
console.log(joinString);
return joinString;


};

console.log(reverseString("hello"));
console.log(reverseString("hello there"));
console.log(reverseString('123! abc!'));
console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;
