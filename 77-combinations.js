// https://leetcode.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let r = []
    function backtrack(tempPath) {
        if (tempPath.length === k) {
            return r.push(tempPath.slice())
        }
        for(let i = 1; i <= n; i++) {
            if (tempPath.length === 0 || i > tempPath[tempPath.length - 1]) {
                tempPath.push(i)
                backtrack(tempPath)
                tempPath.pop()
            }
        }
    }
    backtrack([])
    return r
};