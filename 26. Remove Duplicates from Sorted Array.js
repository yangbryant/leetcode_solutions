/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 未通过验证,感觉网页上存在问题
 */

var removeDuplicates = function(nums) {
	var map = {};
	return nums.filter(function (elt, i) {
		if (map[elt] === undefined) {
			map[elt] = i;
			return true;
		}
		return false;
	});
//	var array = [];
//	for (var i = 0; i < nums.length; i++) {
//		if (map[nums[i].toString()] === undefined) {
//			map[nums[i].toString()] = i;
//			array.push(nums[i]);
//		}
//	}
//	return array;
};

//var nums = [2, 1, 1, 3, 4];
//var nums = [1,2];
var nums = [1,1,2];
console.log(removeDuplicates(nums));