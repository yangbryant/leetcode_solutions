/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var target = [];
    var length = nums.length;
    for (var i = 0; i < length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        var j = i+1, k = length - 1;
        while (j<k) {
            if (nums[j] + nums[k] + nums[i] > 0) {
                k--;
            }
            else if (nums[j] + nums[k] + nums[i] < 0) {
                j++;
            }
            else {
                target.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j-1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k+1]) {
                    k--;
                }
            }
        }
    }
    return target;
};

var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));