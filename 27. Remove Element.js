/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	for (var i = 0; i < nums.length; ) {
		val === nums[i] ? nums.splice(i, 1) : i++;
	}
	return nums.length;
};

var nums = [3,2,2,3];
var val = 3;
console.log(removeElement(nums, val));