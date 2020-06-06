// https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = ''
    let temp = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            str = (str + temp + ' ')
            temp = ''
        } else {
            temp = s[i] + temp
        }
    }
    return str + temp
};