import _ from "lodash";

export function parseNumbers(input) {

  const numbers = _.map(input, (str) => Number(str));
  return _.filter(numbers, (n) => !isNaN(n));
}

export function isValidOperation(operation) {

  const validOps = ["add", "subtract", "multiply", "divide"];

  return _.includes(validOps, operation);
}