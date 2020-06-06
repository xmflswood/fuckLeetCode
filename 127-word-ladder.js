/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let min = 0
    if (!wordList.includes(endWord)) return 0
    function backtrack(str, tempPath) {
        if (endWord === str) {
            if (tempPath.length < min || !min) {
                return min = tempPath.length + 1
            }
        }
        let next = getNext(str, wordList)
        next.forEach(i => {
            if (!tempPath.includes(i)) {
                tempPath.push(str)
                backtrack(i, tempPath)
                tempPath.pop()
            }
        })
    }
    backtrack(beginWord, [])
    return min
};
function getNext(str, dict) {
    let r = []
    for (let i = 0; i < dict.length; i++) {
        let x = 0
        for (let j = 0; j < str.length; j++) {
            if (str[j] !== dict[i][j]) {
                x++
            }
            if (x === 2) break
        }
        if (x === 1) r.push(dict[i])
    }
    return r
}