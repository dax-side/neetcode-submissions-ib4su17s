/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
    let maxSum = -Infinity;
    
    function maxGain(node) {
        if (node === null) return 0;
        
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);
        
        let pathThroughNode = node.val + leftGain + rightGain;
        
        maxSum = Math.max(maxSum, pathThroughNode);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
}
}
