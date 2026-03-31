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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
serialize(root) {
    if (root === null) return "null";
    return root.val + "," + this.serialize(root.left) + "," + this.serialize(root.right);
}

deserialize(data) {
    let values = data.split(",");
    let index = 0;
    
    function build() {
        if (values[index] === "null") {
            index++;
            return null;
        }
        let node = new TreeNode(parseInt(values[index]));
        index++;
        node.left = build();
        node.right = build();
        return node;
    }
    
    return build();
}}
