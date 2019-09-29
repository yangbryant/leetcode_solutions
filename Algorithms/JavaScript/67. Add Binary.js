/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	var aArray = a.split('');
	var bArray = b.split('');
	var index = Math.max(aArray.length, bArray.length);
	
	var aIndex, bIndex, aNum, bNum, sum;
	var sumArray = [];
	var carry = 0;
	
	for (aIndex = aArray.length - 1, bIndex = bArray.length - 1; aIndex >= 0 || bIndex >= 0; aIndex--, bIndex--) {
		aNum = aIndex < 0 ? 0 : aArray[aIndex] - '0';
		bNum = bIndex < 0 ? 0 : bArray[bIndex] - '0';
		sum = aNum + bNum + carry;
		sumArray[index--] = '' + (sum % 2);
		carry = (sum - sum % 2) / 2;
	}
	sumArray[0] = '' + carry;
	if (carry === 0) {
		sumArray.shift();
	}
	return sumArray.join('');
};

var a = "11";
var b = "1";
console.log(addBinary(a, b));