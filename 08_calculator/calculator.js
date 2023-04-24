const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let total = 0;
	for(let i = 0; i<= (a.length - 1); i++) {
    total += a[i]
  }
  
  return total
};

const multiply = function(a) {
  let res = 1;
  for(i = 0; i<=(a.length) - 1; i++){
    res *= a[i];
  }
  return res
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  if(a <= 1){
    return 1;
  }
  let res = 1
	for(let i = a; i>=1; i--){
    res *= i;
  }
  return res; 
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
