// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
const keys = [
    [''],
    [''],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
]
// 动态规划
var letterCombinations = function(digits) {
    let inputs = digits.split('')
    function _(inputs) {
        if (inputs.length === 0) return []
        if (inputs.length === 1) return keys[inputs[0]]
        let preInputs = inputs.slice()
        let last = preInputs.pop()
        last = keys[last]
        let r = []
        let pre = _(preInputs)
        last.forEach(l => {
            pre.forEach(item => {
                r.push(item + l)
            })
        })
        return r
    }
    return _(inputs)
};
console.log(letterCombinations('23'))