/**
 * @param {string} s
 * @return {number}
 */
//var lengthOfLastWord = function(s) {
//	s = s.trim();
//	var length = s.length;
//	for (var i = length - 1; i >= 0; i--) {
//		if (s[i] === " ") {
//			return length - 1 - i;
//		}
//	}
//	return length;
//};

var lengthOfLastWord = function(s) {
	return s.trim().length - s.trim().lastIndexOf(" ") - 1;
};

console.log(lengthOfLastWord(" Hello World! "));