/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	for (var i = nums.length - 1; i >= 0; i--) {
		let val = target - nums[i];
		if (nums.contains(i, val) === true) {
			return [nums.indexOf(val), i];
		}
	}
	return [];
};

Array.prototype.contains = function(index, obj) {
	var i = this.length;
	while (i--) {
		if (i != index && this[i] === obj) {
			return true;
		}
	}
	return false;
};

console.log(twoSum([3,2,4], 6));