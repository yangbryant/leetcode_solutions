/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    var left = 0, right = x;
    var mid = 0;
    while (left < right) {
        mid = Math.ceil((left + right)/ 2);
        if (mid * mid <= x && (mid + 1) * (mid +1) > x) break;
        if (mid * mid < x) left = mid;
        else right = mid;
    }
    return mid;
};

