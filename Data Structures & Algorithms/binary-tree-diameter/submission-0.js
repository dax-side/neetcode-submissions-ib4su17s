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
diameterOfBinaryTree(root) {
    let maxDiameter = 0;
    
    function height(node) {
        if (node === null) return 0;
        
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        
        let diameter = leftHeight + rightHeight;
        maxDiameter = Math.max(maxDiameter, diameter);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    height(root);
    return maxDiameter;
    }
}