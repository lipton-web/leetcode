/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const add = BigInt(digits.join("")) + 1n
    return [...String(add)]
};