/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划，以i为末端的子序和，为 f(i - 1) + i / i 取大值
var maxSubArray = function(nums) {
    let max = nums[0]
    let pre = 0
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i])
        max = Math.max(max, pre)
    }
    return max
};