class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let map = new Map();
     for (let i = 0; i < nums.length; i++) { let num = nums[i]; if (map.has(num)) { map.set(num, map.get(num) + 1); } else { map.set(num, 1); } }
     let arr = Array.from(map.entries());
     arr.sort((a, b) => b[1] - a[1]);
     let result = [];
for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
}
return result;
    }
}
