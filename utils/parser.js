import _ from "lodash";

export function parseNumbers(input) {

  const numbers = _.map(input, (str) => Number(str));

  return _.compact(numbers);
}