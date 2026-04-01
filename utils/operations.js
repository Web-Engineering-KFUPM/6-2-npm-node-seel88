
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}


export function subtract(numbers) {
  return numbers.reduce((acc, curr) => acc - curr);
}


export function multiply(numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
  
}

export function divide(numbers) {
  return numbers.reduce((acc, curr) => {
    if (curr === 0) return "Error: Division by zero";
   
    if (typeof acc === "string") return acc; 
    return acc / curr;
  });
}
import _ from "lodash";
export function parseNumbers(input) {

  const numbers = _.map(input, (str) => Number(str));
  
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}