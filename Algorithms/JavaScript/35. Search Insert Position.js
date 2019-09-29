/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var cmp = function(a,b) {
  return a-b;
};

var searchInsert = function(nums, target) {
    return nums.concat(target).sort(cmp).indexOf(target);
};

var array = [1,3,5,6];

var value1 = 5;
console.log(searchInsert(array, value1) == 2);

var value1 = 2;
console.log(searchInsert(array, value1) == 1);

var value1 = 7;
console.log(searchInsert(array, value1) == 4);

var value1 = 0;
console.log(searchInsert(array, value1) == 0);