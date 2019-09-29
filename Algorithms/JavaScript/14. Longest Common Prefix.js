/**
 * @param {string[]} strs
 * @return {string}
 */

//var longestCommonPrefix = function(strs) {
//	if (strs.length === 0) {
//		return "";
//	}
//	else if (strs.length === 1) {
//		return strs[0];
//	}
//	
//	for (var i = 0; i < strs[0].length; i++) {
//		for (var j = 1; j < strs.length; j++) {
//			if (strs[0][i] !== strs[j][i]) {
//				return strs[0].substring(0, i);
//			}
//		}
//	}
//	return strs[0];
//};

var longestCommonPrefix = function(strs) {
	if (strs.length === 0) {
		return "";
	}
	else if (strs.length === 1) {
		return strs[0];
	}
	
	strs = strs.sort();
	
	for (var i = 0; i < strs[0].length; i++) {
		if (strs[0][i] !== strs[strs.length - 1][i]) {
			return strs[0].substring(0, i);
		}
	}
	return strs[0];
};

var strs = ["absc", "abeff", "abed"];
console.log(longestCommonPrefix(strs));
