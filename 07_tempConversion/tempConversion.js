// fahrenheit to celsius
// (F − 32) × 5/9
const ftoc = function (F) {

  celcius = (F - 32) * 5 / 9;
  //toFixed parses Number to string and limits decimals
  // Use Number() to parse celcius back from String to Number
  celcius = Number(celcius.toFixed(1));

  return celcius;
};

// celsius to fahrenheit
// (C × 9/5) + 32 

const ctof = function (C) {
  fahrenheit = (C * 9 / 5) + 32;
  fahrenheit = Number(fahrenheit.toFixed(1));

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
