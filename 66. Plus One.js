/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	for (var i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0;
		} else {
			digits[i]++;
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
};

var digits = [0,2,9];
//var digits = [9,9,9];
//var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(digits));