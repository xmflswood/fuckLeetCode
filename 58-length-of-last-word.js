// https://leetcode.com/problems/length-of-last-word/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let l = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (!s[i]) break
        if (s[i] === ' ' && l === 0) continue
        if (s[i] === ' ') return l
        l++
    }
    return l
};