const removeFromArray = function(anArray, removeElement) {
    let newArray = anArray.filter(item => item !== removeElement);
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
