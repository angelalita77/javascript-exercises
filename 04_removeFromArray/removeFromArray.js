const removeFromArray = function(anArray, ...removeElement) {
    let newArray = anArray.filter(item => !removeElement.includes(item));
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
