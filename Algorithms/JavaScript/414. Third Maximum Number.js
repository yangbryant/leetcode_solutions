/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	nums = nums.sort();
	var ans = nums.length;
	console.log(nums);
	for (var i = nums.length - 1; i > 0; i--) {
		if (nums[i] === nums[i-1]) {
			ans--;
		}
	}
	return ans < 3 ? nums[nums.length - 1] : nums[ans - 3];
};

var nums = [1, 3, 3, 2, 6];
console.log(thirdMax(nums));