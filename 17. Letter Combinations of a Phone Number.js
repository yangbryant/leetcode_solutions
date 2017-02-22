/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterAdds = function(digit, array) {
    var map = {
        '0': [],
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    var letters = map[digit];
    if (array.length < 1) return letters;

    var ans = [];
    array.forEach(function(elem, index) {
        letters.forEach(function(e) {
            ans.push(elem.concat(e));
        });
    });
    return ans;
 };
var letterCombinations = function(digits) {
    var array = [];
    digits.split('').forEach(function(ele) {
        array = letterAdds(ele, array);
    });
    return array;
};

var digits = '538';
console.log(letterCombinations(digits));