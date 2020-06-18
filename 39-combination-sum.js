// https://leetcode-cn.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 比较标准的 减法 解法： 最好加上排序 可以方便剪枝 提升效率
var combinationSum = function(candidates, target) {
    let r = []
    function _(tempPath, target, start) {
        if (target < 0) return
        if (target === 0) {
            return r.push(tempPath)
        }
        for (let i = start; i < candidates.length; i++) {
            let newTempPath = tempPath.slice()
            newTempPath.push(candidates[i])
            _(newTempPath, target - candidates[i], i)
        }
    }
    _([], target, 0)
    return r
};
// 加法解法
var combinationSum = function(candidates, target) {
    let r = []
    function backtrack(tempPath, sum, start) {
        if (sum > target) return
        if (sum === target) {
            return r.push(tempPath.slice())
        }
        for (let i = start; i < candidates.length; i++) {
            tempPath.push(candidates[i])
            sum += candidates[i]
            backtrack(tempPath, sum, i)
            tempPath.pop()
            sum -= candidates[i]
        }
    }
    backtrack([], 0, 0)
    return r
};