/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	nums1.splice(m);
	nums2.splice(n);
	for (var i = 0, j = 0; j < m + n; j++) {
		if (nums2[i] < nums1[j] || nums1[j] === undefined) {
			nums1.splice(j, 0, nums2[i++]);
		}
	}
	console.log(nums1);
};

console.log(merge([1, 2, 4, 8], 3, [3, 5, 6, 9, 10], 3));
console.log(merge([0], 0, [1], 1));