// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s = ''
    if (!strs.length) return s
    for (let i = 0; i < strs[0].length; i++) {
        let flag = true
        let target = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== target) {
                flag = false
                break
            }
        }
        if (flag) {
            s += target
        } else {
            break
        }
    }
    return s
};