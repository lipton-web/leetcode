/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const size = mat[0].length

    let sum = 0
    mat.forEach((item, idx, arr) => {
        if(size%2 === 0) {
            sum += item[idx] + item[size-1-idx]
        } else {
            const harf = Math.floor(size/2)
            if(Math.floor(size/2) === idx) {
                sum += item[harf]
            }else{
                sum += item[idx] + item[size-1-idx]
            }
        }
    })
    return sum
};