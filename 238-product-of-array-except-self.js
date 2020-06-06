// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左右乘积
var productExceptSelf = function(nums) {
    let l = [1]
    let r = []
    let result = []
    for (let i = 1; i < nums.length; i++) {
        l[i] = l[i - 1] * nums[i - 1]
    }
    r[nums.length - 1] = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        r[i] = r[i + 1] * nums[i + 1]
    }
    for (let i = 0; i < nums.length; i++) {
        result.push(l[i] * r[i])
    }
    return result
};