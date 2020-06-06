// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let max = 0
    while(i < j) {
        let area = 0
        if (height[i] < height[j]) {
            area = height[i] * (j - i)
            i++
        } else {
            area = height[j] * (j - i)
            j--
        }
        if (area > max) {
            max = area
        }
    }
    return max
};