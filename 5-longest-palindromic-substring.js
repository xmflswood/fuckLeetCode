// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
// 马拉车算法看不懂，用动态规划做这题，超时。
var longestPalindrome = function(s) {
    if (!s) return ''
    let map = {}
    let str = ''
    let size = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (_(s, i, j)) {
                map[i + ',' + j] = true
                let l = j - i + 1
                if (l > size) {
                    str = s.substring(i, j + 1)
                    size = l
                }
            }
        }
    }
    function _(s, i, j) {
        if (map[i + ',' + j]) return true
        if (s[i] === s[j]) {
            if (j - i < 3) {
                return true
            }
            if (_(s, i + 1, j - 1)) {
                return true
            }
        }
    }
    return str
}