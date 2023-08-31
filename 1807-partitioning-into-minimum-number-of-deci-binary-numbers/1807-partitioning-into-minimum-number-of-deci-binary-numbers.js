/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    const arr = n.split('')
    // console.log(arr)
    console.log(Math.max(...arr))
    return Math.max(...arr)
};