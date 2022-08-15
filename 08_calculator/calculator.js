const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {

  let sumOfArr = arr.reduce(function (previous, current) {

    return previous += current;

  }, 0);

  return sumOfArr;
};

const multiply = function (arr) {
  let productOfArr = arr.reduce(function (previous, current) {

    return previous *= current;

  });

  return productOfArr;
};

const power = function (base, power) {
  let product = 1;
  for (let i = 0; i < power; i++) {
    product *= base;
  }

  return product;
};

const factorial = function (num) {

  let product = 1;

  if (num === 0) return 1;
  else {
    for (let i = num; i > 0; i--) {
      product *= i;
    }
    return product;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
