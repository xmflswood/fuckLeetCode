/**
 * @param {number[]} nums
 * @return {number}
 */
var a = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let max = 0
    function _(n) {
        if (!n) return 0
        if (n === 1) return nums[0]
        let last = nums[n - 1]
        let pref = _(n - 1)
        if (last + pref > last) return last + pref
        return last
    }
    max = _(nums.length)
    return max
};
console.log(maxSubArray(a))