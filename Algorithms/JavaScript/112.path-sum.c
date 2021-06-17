/*
 * @lc app=leetcode id=112 lang=c
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool helper(struct TreeNode *root, int targetSum, int sum){
    if (root == NULL) return false;
    sum += root->val;

    if (root->left == NULL && root->right == NULL) {
        return sum == targetSum;
    }

    return helper(root->left, targetSum, sum) || helper(root->right, targetSum, sum);
}

bool hasPathSum(struct TreeNode* root, int targetSum){
    return  helper(root, targetSum, 0);
}


// @lc code=end

