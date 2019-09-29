/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var i =0, j = height.length - 1;
    while (i < j) {
        max = Math.max(max, (j-i) * Math.min(height[i], height[j]));
        height[i] < height[j] ? i++ : j--;
    }
    return max;
};

// var height = [1, 2, 3, 4, 5, 6, 5];
var height = [3, 2, 1, 3];
console.log(maxArea(height));