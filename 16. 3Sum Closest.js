/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var length = nums.length;
    if (length < 3) return 0;

    var rst = nums[0] + nums[1] + nums[2] - target;
    for (var i = 0; i < length - 2; i++) {
        var j = i + 1, k = length - 1;
        while (j<k) {
            var cur = nums[i] + nums[j] + nums[k] - target;
            if (Math.abs(cur) < Math.abs(rst)) {
                rst = cur;
                if (rst === 0) return target;
            }
            cur > 0 ? k-- : j++;
        }
    }
    return rst + target;
};

var nums = [1, 1, 1, 0];
var target = -100;
console.log(threeSumClosest(nums, target));