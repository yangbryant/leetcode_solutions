/**
 * @param {number} n
 * @return {number}
 */
var factorial = function(n) {
	return n <= 1 ? 1 : n * factorial(n - 1);
};

var fibonacci = function(n, m) {
	return factorial(n)/factorial(m)/factorial(n-m);
};

var climbStairs = function(n) {
	var cnt = Math.floor(n/2);
	var sum = 0;
	for (var i = 0; i <= cnt; i++) {
		sum += fibonacci(n - i, i);
	}
	return sum;
};

var climbStairs = function(n) {
	return n <= 2 ? n : climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(11));