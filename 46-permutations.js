/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 动态规划做
// https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
var permute = function(nums) {
    function _(ar) {
      if (ar.length === 1) return [ar]
      let news = ar.slice(1)
      let target = ar[0]
      let r = []
      let pre = _(news)
      pre.forEach(item => {
        for(let i = 0; i < (item.length + 1); i ++) {
          let j = []
          let l = item.slice(i)
          for (let k = 0; k < i; k++) {
            j[k] = item[k]
          }
          j[i] = target
          j = j.concat(l)
          r.push(j)
        }
      })
      return r
    }
    return _(nums)
};
// 经典回溯
var permute = function(nums) {
  let length = nums.length
  let r = []
  function backtrack(tempPath) {
    if (tempPath.length === length) {
      return r.push(tempPath)
    }
    for (let i = 0; i < length; i++) {
      if (!tempPath.includes(nums[i])) {
        tempPath.push(nums[i])
        backtrack(tempPath.slice())
        tempPath.pop()
      }
    }
  }
  backtrack([])
  return r
};