class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    let maxArea = 0;
    let stack = [];
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, h * w);
        }
        
        stack.push(i);
    }
    
    while (stack.length > 0) {
        let h = heights[stack.pop()];
        let w = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, h * w);
    }
    
    return maxArea;
}
}
