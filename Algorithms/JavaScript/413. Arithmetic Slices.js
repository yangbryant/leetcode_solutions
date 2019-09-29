/**
 * @param {number[]} A
 * @return {number}
 */
// var numberOfArithmeticSlices = function(A) {
// 	var count = 0;
// 	var len = 0;
// 	for (var i = 0; i < A.length - 2; i++) {
// 		if (2 * A[i+1] === A[i] + A[i+2]) {
// 			len++;
// 		}
// 		else {
// 			count += len*(len+1)/2;
// 			len = 0;
// 		}
// 	}
// 	count += len*(len+1)/2;
// 	return count;
// };

var numberOfArithmeticSlices = function(A) {
	var count = 0;
	var len = 0;
	for (var i = 0; i < A.length - 2; i++) {
		len = (2 * A[i+1] === A[i] + A[i+2]) ? (len + 1) : 0;
		count += len;
	}
	return count;
};

var A = [2, 2, 3, 4, 5, 9, 13, 17, 21];
console.log(numberOfArithmeticSlices(A));