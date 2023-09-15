/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const split = s.split("")
    // console.log(split)
    // console.log("ASCII", 'f'.charCodeAt(0))

    const answer = []

    for(let i = split[0].charCodeAt(0); i <= split[3].charCodeAt(0); i++) {
        // console.log(String.fromCharCode(i));
        for(let j = split[1]; j <= split[4]; j++) {
            answer.push(String.fromCharCode(i) + j)
        }
    }
    return answer
};