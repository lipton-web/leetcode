/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const newRoot = new TreeNode();
    let cur = newRoot;

    const inorder = (node) => {
        if(node === null) return;
        inorder(node.left);

        node.left = null;
        cur.right = node;

        cur = node;
        inorder(node.right);
    }
    inorder(root)
    return newRoot.right;
};