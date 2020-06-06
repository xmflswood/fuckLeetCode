// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1
    let flag = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            flag = nums[i]
            count = 1
            continue
        }
        if (flag === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return flag
};