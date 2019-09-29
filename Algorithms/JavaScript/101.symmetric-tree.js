/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var result = true;

    if (!root) return true;

    function helper(leftTree, rightTree) {
        if (!leftTree && !rightTree) return true;
        if (leftTree && rightTree) {
            return leftTree.val === rightTree.val &&
            helper(leftTree.left, rightTree.right) &&
            helper(rightTree.left, leftTree.right)
        } else {
            return false;
        }
    }

    return helper(root.left, root.right);
};

