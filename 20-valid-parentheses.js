// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let left = {'(': ')', '[': ']', '{': '}'}
    let a = []
    for (let i = 0; i < s.length; i++) {
        if (left[s[i]]) {
            a.push(s[i])
        } else {
            let l = left[a.pop()]
            if (l !== s[i]) return false
        }
    }
    if (a.length) return false
    return true
};