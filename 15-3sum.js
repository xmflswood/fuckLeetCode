// https://leetcode.com/problems/3sum/
// 不符合题目要求
// 重点要解决去重，n方复杂度 更优解为先排序，双指针向中间靠

var threeSum = function(nums) {
    let map = {}
    let result = []
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let target = map[-(nums[i] + nums[j])]
            if (target && target > j) {
                result.push([i, j, target])
            }
        }
    }
    return result
};