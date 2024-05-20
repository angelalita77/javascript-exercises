const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  // subtract whole number minus decimaled number. If it's not zero
  // with a decimal the difference,  that mean celsisus was a decimal number.
  if (Math.trunc(celsius) - celsius !== 0) {
  return Math.round(celsius * 10) / 10; }
  else {
    return celsius;
  }
}

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32;
// subtract whole number minus decimaled number. If it's not zero
// with a decimal the difference,  that mean celsius was a decimal number.
  if (Math.trunc(fahrenheit) - fahrenheit !== 0) {
    return Math.round(fahrenheit * 10) / 10; }
    else {
  return fahrenheit;
  }
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
