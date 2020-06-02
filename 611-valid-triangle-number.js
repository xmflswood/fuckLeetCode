// https://leetcode.com/problems/valid-triangle-number/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let r = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (validTr(nums[i], nums[j], nums[k])) {
                    r++
                }
            }
        }
    }
    return r
};
function validTr(a, b, c) {
    if (!a || !b || !c) return false
    if ((a + b > c) && (a + c > b) && (b + c > a)) return true
    return false
}
// 先排序 后双指针效率高
var triangleNumber = function(nums) {
    let r = 0
    nums.sort((a, b) => a - b)
    for (let i = nums.length; i >= 2; i--) {
        let max = nums[i]
        let left = 0
        let right = i - 1
        while(left < right) {
            if (nums[left] + nums[right] > max) {
                r+=(right - left)
                right--
            } else {
                left++
            }
        }
    }
    return r
};