/**
 * @param {string} s
 * @return {boolean}
 */
// 缺少一些判断 不过大致意思对了即可
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