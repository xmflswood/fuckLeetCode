// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = null
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        if (min === null) {
            min = prices[i]
            continue
        }
        if (prices[i] < min) min = prices[i]
        let x = prices[i] - min
        if (x > max) {
            max = x
        }
    }
    return max
};