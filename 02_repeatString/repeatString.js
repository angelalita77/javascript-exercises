const repeatString = function(word, num) {
	let str = '';

    if (num >= 0)
    {
        for (let i=0; i<num; i++) {
            str += word;
        }
        return str;
    }
    else {
      return "ERROR";
    }

};

console.log(repeatString('hey',3));
console.log(repeatString('hey',10));
console.log(repeatString('hey',1));
console.log(repeatString('hey',0));
console.log(repeatString('hey',-1));

// Do not edit below this line
module.exports = repeatString;
