/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var isError = false;
	var multiple = 1;
	return str.trim().split('').map(function (elt, i) {
		if (i === 0) {
			if (elt === '-') {
				multiple = -1;
				return 0;
			}
			else if (elt === '+') {
				return 0;
			}
		}
		if (elt >= '0' && elt <= '9') {
			return elt - '0';
		}
		return -1;
	}).reduce(function (sum, elt, i) {
		isError = elt === -1 ? true : isError;
		if (isError === true) {
			return sum;
		}
		sum = sum * 10 + multiple * elt;
		return sum > 2147483647 ? 2147483647 : (sum < -2147483648 ? -2147483648 : sum);
	}, 0);
};

var str = "-1222222";
console.log(myAtoi(str));

