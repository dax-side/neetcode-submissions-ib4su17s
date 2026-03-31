class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) { return false; } let count = {}; for (let i = 0; i < s.length; i++) { let char = s[i]; if (count[char]) { count[char]++; } else { count[char] = 1; } } for (let i = 0; i < t.length; i++) { let char = t[i];

if (!count[char]) {
    return false;  // letter doesn't exist in s
}

count[char]--;

if (count[char] < 0) {
    return false;  // too many of this letter in t
}
}
return true
}
}
