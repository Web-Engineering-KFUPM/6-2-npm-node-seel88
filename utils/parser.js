import _ from "lodash";

export function parseNumbers(input) {
  // 1. Map the input strings to Numbers
  const numbers = _.map(input, (str) => Number(str));

  // 2. Use _.compact to remove all falsy values (including NaN)
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}