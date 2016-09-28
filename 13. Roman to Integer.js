/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var map = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};
	
	var sum = 0;
	var pre = 0;
	for (var i = s.length - 1; i >= 0; i--) {
		var cur = map[s[i]];
		sum += cur * (cur < pre ? -1 : 1);
		pre = cur;
	}
	return sum;
}
//var romanToInt = function(s) {
//	var map = {
//		'I': 1,
//		'V': 5,
//		'X': 10,
//		'L': 50,
//		'C': 100,
//		'D': 500,
//		'M': 1000
//	};
//	return s.split('').reduce(function (sum, elt, i, array) {
//		return sum + map[elt] * (map[elt] < map[array[i+1]] ? -1 : 1);
//	}, 0);
//};

//var romanStr = "DCXXI";
//var romanStr = "MMMCMXCIX";
//var romanStr = "MMCDXXXI";
var romanStr = "DCXXI";
console.log(romanToInt(romanStr));