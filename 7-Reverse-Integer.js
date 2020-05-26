// https://leetcode.com/problems/reverse-integer/
var reverse = function(x) {
    let nums = []
    let inc = false
    x = x + ''
    x = Array.from(x)
    x.reverse()
    x.forEach((i, index) => {
        if (!inc && i === '-') {
            inc = true
        } else {
            if (+i !== 0 || index !== 0) {
                nums.push(i)
            }
        }
    })
    nums = +(nums.join(''))
    if (inc) {
        return -nums
    }
    return nums
}