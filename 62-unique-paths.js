// https://leetcode.com/problems/unique-paths/submissions/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let map = {}
    function _(m, n) {
        let target = map[m + '|' + n] || map[n + '|' + m]
        if (target) return target
        if (m === 1 || n === 1) return 1
        let s = _(m -1, n) + _(m, n -1)
        map[m + '|' + n] = s
        return s
    }
    return _(m, n)
};
// 高中排列组合题目。。。 C(m+n-2,m-1)