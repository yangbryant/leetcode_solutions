/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
	var num = Math.abs(x);
	if (num < 10) {
		return  x;
	}
	var str = '';
	for (var i = 0; i < Math.floor(Math.log10(num)) + 1; i++) {
//		str += (num%(Math.pow(10, i+1)) - num%(Math.pow(10, i)))/Math.pow(10, i);
		str += Math.floor(num%(Math.pow(10, i+1))/Math.pow(10, i));
	}
	num = parseInt(str);
	num = num > 2147483647 ? 0 : num;
	return x < 0 ? -num : num;
}

//var reverse = function(x) {
//	var num = parseInt(Math.abs(x).toString().split('').reverse().join(''));
//	return num > 2147483647 ? 0 : (x < 0 ? -num : num);
//};

var number = 101;
console.log(reverse(number));