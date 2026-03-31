class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let map = new Map();
    
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let count = new Array(26).fill(0);
        
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }
        
        let key = count.toString();
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }
    
    return Array.from(map.values());
}
}
