/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	var length = needle.length;
	var count = haystack.length - needle.length + 1;
	for (var i = 0; i < count; i++) {
		if (haystack.substring(i, i + length) === needle) {
			return i;
		}
	}
	return -1;
};

var needle = "bc";
var haystack = "abcccc";
console.log(strStr(haystack, needle));