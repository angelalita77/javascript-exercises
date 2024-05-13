const leapYears = function(year) {
    /* Make sure that the year is not divisible by 100 for non-century years */
    if ((year % 100 !== 0) && (year % 4 === 0 || year % 400 === 0)) 
        return true;
    /* Make sure that the year is divisible by 400 for century years */
    else if (year % 100 === 0 && year % 400 === 0)
        return true;
    else
    return false;


};

console.log(leapYears(1996).toString());
console.log(leapYears(1997).toString());
console.log(leapYears(34992).toString());
console.log(leapYears(1900).toString());
console.log(leapYears(1600).toString());
console.log(leapYears(700).toString());

// Do not edit below this line
module.exports = leapYears;
