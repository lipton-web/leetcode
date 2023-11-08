/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;
    console.log(nums.sort((a, b) => a - b))
    const numsSort = nums.sort((a, b) => a - b);

    numsSort.forEach((item, idx) => {
        if(idx % 2 === 0) return result += item;
    })
    console.log("result :", result)
    return result;
};