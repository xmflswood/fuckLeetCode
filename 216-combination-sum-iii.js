// https://leetcode-cn.com/problems/combination-sum-iii/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 减法
var combinationSum3 = function(k, n) {
    let r = []
    function dfs(tempPath, target, start) {
        if (target < 0) return
        if (target === 0 && tempPath.length === k) {
            return r.push(tempPath)
        }
        for (let i = start + 1; i < nums.length; i++) {
            if (tempPath.length < k) {
                let newTempPath = tempPath.slice()
                newTempPath.push(nums[i])
                dfs(newTempPath, target - nums[i], i)
            }
        }
    }
    dfs([], n, -1)
    return r
};
// 加法
var combinationSum3 = function(k, n) {
    let r = []
    function backtrack(tempPath, sum, start) {
        if (sum > n) return false
        if (tempPath.length === k && sum === n) {
            return r.push(tempPath.slice())
        }
        for (let i = start + 1; i < nums.length; i++) {
            if (tempPath.length < k) {
                tempPath.push(nums[i])
                sum += nums[i]
                let flag = backtrack(tempPath, sum, i)
                tempPath.pop()
                sum -= nums[i]
                if (flag === false) break
            }
        }

        
    }
    backtrack([], 0, -1)
    return r
};