const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return console.log(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32;
  return console.log(fahrenheit.toFixed(1));
};

convertToCelsius(32);
convertToCelsius(100);


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
