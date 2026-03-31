class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let storepts = 0;
for ( let i =0; i < s.length-1; i++)
{
storepts += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0))
}
return storepts;
    }
}
