const add = function(firstNumber,secondNumber) {
  return firstNumber+secondNumber;
	
};

const subtract = function(firstNumber,secondNumber) {
  return firstNumber-secondNumber;
	
};

const sum = function(numbers) {
  const total=numbers.reduce((sum,number)=>{
    return sum+=number;
  },0);
  return total;
	
};

const multiply = function(numbers) {
const total=numbers.reduce((product,number)=>{
  return product*=number;
},1);
return total;
};

const power = function(base,exponent) {
  return base**exponent;
	
};

const factorial = function(number) {
  let total=1;
  for(let i=1;i<=number;i++){
    total*=i;
  }
  return total;
	
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
