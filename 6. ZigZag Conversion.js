/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
	let count = numRows > 1 ? 2*numRows - 2 : 1;
	
	var array = s.split('').reduce(function (sum, elt, i) {
		let index = i % count;
		let value = index < count/2 ? index : count - index;
		sum[value] = sum[value] === undefined ? elt : sum[value] + elt;
//		sum[value] = sum[value] + elt;
		return sum;
	}, []);
	
//	return array.reduce(function (sum, elt, i) {
//		return sum.concat(elt);
//	}, "");	
	return array.reduce( (sum, elt) => sum + elt);
};

var string = "PAYPALISHIRING";
var height = 5;
//var string = "A";
//var height = 1;

console.log(convert(string, height));