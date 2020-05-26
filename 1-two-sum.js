// https://leetcode.com/problems/two-sum/
const nums = [2, 7, 11, 15]
const target = 9
// n方
var twoSum = function(nums, target) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && (i !== j)) {
                return [i, j]
            }
        }
    }
}
// 利用 map，target 减去相应的数值，查看map里面有没有
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let index = map[target - nums[i]]
        if ((index || index === 0) && (index !== i)) {
            return [i, index]
        }
    }
    
}