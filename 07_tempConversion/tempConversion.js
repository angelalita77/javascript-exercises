const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  if (Math.trunc(celsius) - celsius !== 0) {
  return celsius.toFixed(1); }
  else {
    return celsius;
  }
}

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32;
  return fahrenheit;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
