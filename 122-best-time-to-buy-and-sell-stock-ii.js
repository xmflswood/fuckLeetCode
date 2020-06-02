// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0
    let min = null
    let temp = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min || min === null) {
            min = prices[i]
        } else {
            let dt = prices[i] - min
            if (dt > temp) {
                temp = dt
            }
        }
        m += temp
        min = prices[i]
        temp = 0
    }
    return m
};
// 看了答案才发现自己二逼了，其实只要今天比明天小，买卖就行，加起来
var maxProfit = function(prices) {
    let m = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            m += (prices[i] - prices[i - 1])
        }
    }
    return m
};