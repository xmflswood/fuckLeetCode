// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} str
 * @return {number}
 */
const reg = /[0-9]/
const reg2 = /[\-\+]/
const min = -Math.pow(2, 31)
const max = Math.pow(2, 31) - 1
var myAtoi = function(str) {
    let r = ''
    let flag = false
    for (let i = 0; i < str.length; i++) {
        let t = str[i]
        if (t !== ' ') {
            if ((!flag && reg2.test(t)) || reg.test(t)) {
                r += t
                flag = true
            } else {
                break
            }
        } else {
            if (flag) break
        }
    }
    if (r === '-' || r === '+') return 0
    if (+r < min ) return min
    if (+r > max) return max
    return +r
};
// parseInt就是这个规则。。。