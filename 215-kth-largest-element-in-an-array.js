// https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 小顶堆的做法比较合适
var findKthLargest = function(nums, k) {
    let a = [] // 小顶堆
    for (let i = 0; i < nums.length; i++) {
        if (a.length < k) {
            a.unshift(nums[i])
            little(a, 0)
        } else {
            if (nums[i] > a[0]) {
                a[0] = nums[i]
                little(a, 0)
            }
        }
    }
    return a[0]
    function little(nums, i) {
        if (nums[i] > nums[i * 2 + 1]) {
            [nums[i], nums[i * 2 + 1]] = [nums[i * 2 + 1], nums[i]]
            little(nums, i * 2 + 1)
        }
        if (nums[i] > nums[i * 2 + 2]) {
            [nums[i], nums[i * 2 + 2]] = [nums[i * 2 + 2], nums[i]]
            little(nums, i * 2 + 2)
        }
    }
};