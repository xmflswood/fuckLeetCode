// https://leetcode.com/problems/multiply-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let r = []
    if (num1 === '0' || num2 === '0') return '0'
    let length = num1 + num2
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (r[i + j + 1]) {
                r[i + j + 1] = r[i + j + 1] + (num1[i] * num2[j])
            } else {
                r[i + j + 1] = num1[i] * num2[j]
            }
        }
    }
    let temp = 0
    for (let i = r.length - 1; i >= 0; i--) {
        if (r[i] === undefined) {
            if (!temp) break
            r[i] = +temp
        } else {
            r[i] = r[i] + temp
            temp = 0
        }
        let num = r[i]
        r[i] = num % 10
        temp = num / 10 | 0 // 取整
    }
    return r.join('')
};