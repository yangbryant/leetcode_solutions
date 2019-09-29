/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	var array = [];
	for (var i = 1; i <= n; i++) {
		var ans = "";
		if (i%3 === 0) {
			ans += "Fizz";
		} 
		if (i%5 === 0) {
			ans += "Buzz";
		}
		ans = ans === "" ? i.toString() : ans;
		array.push(ans);
	}
	return array;
};

console.log(fizzBuzz(15));