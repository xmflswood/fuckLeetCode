// https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let rs = []
    function _(left, right, str) {
      if (left + right === n * 2) {
        rs.push(str)
        return
      }
      if (left < n) {
        _(left + 1, right, str + '(')
      }
      if (left > right) {
        _(left, right + 1, str + ')')
      }
    }
    _(0, 0, '')
    return rs
};