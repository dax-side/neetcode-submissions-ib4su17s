class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
 isPalindrome(s) {
    let cleaned = "";
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }
    
    let reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
}
}