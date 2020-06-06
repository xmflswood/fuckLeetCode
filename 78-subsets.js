// https://leetcode.com/problems/subsets/submissions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let r = []
    function backtrack(tempPath, n, prefIndex) {
        if (tempPath.length === n) {
            return r.push(tempPath.slice())
        }
        for (let i = prefIndex + 1; i < nums.length; i++) {
            tempPath.push(nums[i])
            backtrack(tempPath, n, i)
            tempPath.pop()
        }
    }
    for (let i = 0; i <= nums.length; i++) {
        backtrack([], i, -1)
    }
    return r
};