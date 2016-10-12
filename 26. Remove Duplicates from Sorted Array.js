/**
 * @param {number[]} nums
 * @return {number}
 */

 var removeDuplicates = function(nums) {
     for(var i=0;i<nums.length;)
     {
         if(nums[i+1]=== nums[i])
             nums.splice(i, 1);
         else
             i++;
     }
     return i;
 };

//var removeDuplicates = function(nums) {
//	var map = {};
//	var i = 0;
//	while (i < nums.length) {
//		if (map[nums[i]] === undefined) {
//			map[nums[i]] = i;
//			i++;
//		}
//		else {
//			nums.splice(i, 1);
//		}
//	}
//	return i;
//};

//var nums = [2, 1, 1, 3, 4];
//var nums = [1,2];
var nums = [1, 1, 1, 2];
console.log(removeDuplicates(nums));