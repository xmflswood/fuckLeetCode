// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let str = ''
    let size = 0
    for (let i = 0; i < s.length; i++) {
        let index = str.indexOf(s[i])
        if (index === -1) {
            str += s[i]
            size = str.length > size ? str.length : size
        } else {
            str = str.substring(index + 1) + s[i]
        }
    }
    return size
};