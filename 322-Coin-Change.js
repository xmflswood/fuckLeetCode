// https://leetcode.com/problems/coin-change/

var coinChange = function (coins, target) {
    var map = {}
    function _(coins, target) {
        if (target === 0) return 0
        if (map[target]) return map[target]
        let sums = []
        coins.forEach(i => {
            if (target - i >= 0) {
                let before = _(coins, target - i)
                if (before !== -1) {
                    sums.push(before + 1)
                } else {
                    map[target - i] = -1
                }
            }
        })
        if (sums.length === 0) return -1
        let min = Math.min(...sums)
        map[target] = min
        return min
    }
    return _(coins, target)
}