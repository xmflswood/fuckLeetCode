// https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 
var singleNumber = function(nums) {
    let r = 0
    for (let i = 0; i < nums.length; i++) {
        r ^= nums[i]
    }
    return r
};
// why am i so stupid