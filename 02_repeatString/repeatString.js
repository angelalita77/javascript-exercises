const repeatString = function(word, num) {
	let str = '';
for (let i=0; i<num; i++) {
	str += word;
}
return str;
};

console.log(repeatString('hey',3));

// Do not edit below this line
module.exports = repeatString;
