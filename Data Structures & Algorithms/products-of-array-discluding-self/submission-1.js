class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let left = new Array(nums.length);
        left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    
    let right = new Array(nums.length);
        right[nums.length - 1] = 1;  
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
        let result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    return result;

    }
}
