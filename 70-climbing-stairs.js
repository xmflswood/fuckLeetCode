/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let map = {}
    function _(stairs) {
        if (map[stairs]) return map[stairs]
        if (stairs === 1) return 1
        if (stairs === 2) return 2
        let n = _(stairs - 1) + _(stairs - 2)
        map[stairs] = n
        return n
    }
    return _(n)
};