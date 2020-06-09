// https://leetcode.com/problems/word-ladder/submissions/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 学到了BFS 用队列的思想
var ladderLength = function(beginWord, endWord, wordList) {
    let min = 0
    let length = 1
    if (!wordList.includes(endWord)) return 0
    function bfs() {
        let queue = [beginWord]
        let index = 0
        let record = [1]
        while(queue.length > 0) {
            let str = queue.shift()
            let next = getNext(str, wordList)
            if (record[index + 1] === undefined) {
                record[index + 1] = 0
            }
            for (let i = 0; i < next.length; i++) {
                if (next[i] === endWord) {
                    return min = length + 1
                }
                record[index + 1]++
                queue.push(next[i])
            }
            record[index]--
            if (record[index] === 0) {
                length++
                index++
            }
        }
    }
    bfs()
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
        if (x === 1) {
            // 直接从字典中拔掉
            r.push(dict[i])
            dict.splice(i, 1)
            i--
        }
    }
    return r
}