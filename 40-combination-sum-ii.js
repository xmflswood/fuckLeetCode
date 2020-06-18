// https://leetcode-cn.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    let r = []
    let pref = ''
    function _(tempPath, sum, index) {
        if (sum > target) return false
        if (sum === target) {
            return r.push(tempPath.slice())
        }
        for (let i = index + 1; i < candidates.length; i++) {
            if (candidates[i] === pref) {
                continue
            }
            sum += candidates[i]
            tempPath.push(candidates[i])
            let flag = _(tempPath, sum, i)
            pref = tempPath.pop() // 去重
            sum -= candidates[i]
            if (flag === false) break
        }
    }
    _([], 0, -1)
    return r
};