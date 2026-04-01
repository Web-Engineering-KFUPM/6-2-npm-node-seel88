import _ from "lodash";

/**
 * TODO: Use lodash to parse and clean numbers from arguments
 * @param {string[]} args 
 * @returns {number[]}
 */
export function parseNumbers(args) {
    const numbers = _.map(args, (n) => parseFloat(n));
    return _.compact(numbers);
}