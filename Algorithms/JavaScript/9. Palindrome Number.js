/**
 * @param {number} x
 * @return {boolean}
 */
//var isPalindrome = function(x) {
//	let array = x.toString().split('');
//	for (var i = 0; i < array.length/2; i++) {
//		if (array[i] !== array[array.length - 1 - i]) {
//			return false;
//		}
//	}
//	return true;
//};

var isPalindrome = function(x) {
	return x.toString().split('').reverse().join('') === x.toString() ? true : false;
};

var num = 123456654321;
console.log(isPalindrome(num));