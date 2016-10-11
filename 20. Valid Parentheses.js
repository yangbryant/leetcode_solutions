/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var map = {
		'(' : -1,
		')' :  1,
		'[' : -2,
		']' :  2,
		'{' : -3,
		'}' :  3,
	};
//	return s.split('').map(function (elt, i) {
//		return map[elt];
//	}).reduce(function (rst, elt, i) {
//		rst[rst.length - 1] === elt ? rst.pop() : rst.push(-elt);
//		return rst;
//	}, []).length === 0 ? true : false;

	var array = s.split('').map(function (elt, i) {
		return map[elt];
	});
	var rst = [];
	for (var i = 0; i < array.length; i++) {
		if (rst[rst.length - 1] === array[i]) {
			rst.pop();
		}
		else {
			rst.push(-array[i]);
		}
	}
	return rst.length === 0 ? true : false;
};

console.log(isValid("{[][()]}"));
