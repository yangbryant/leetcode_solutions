/**
 * @param {string} s
 * @return {string}
 */
// var isPalindrome = function(s) {
//     return s === s.split('').reverse().join('');
// };

// var longestPalindrome = function(s) {
//     if (s.length > 1000) return;
//     for (var i = s.length; i > 0; i--) {
//         for (var j = s.length - i; j >= 0; j--) {
//             var substr = s.substr(j, i);
//             if (isPalindrome(substr) === true) {
//                 return substr;
//             }
//         }
//     }
// };

var longestPalindrome = function(s) {
    var maxLen = 0, idx = 0;

    var isPalindrome = function(s, p, n) {
        while(p >= 0 && n < s.length && s.charAt(p) === s.charAt(n)) {
            p--, n++;
        }

        if (maxLen <= n - p - 1) {
            maxLen = n - p - 1;
            idx = p + 1;
        }
    };

    if (s.length < 2) return s;
    for (var i = 0; i < s.length - 1; i++) {
        isPalindrome(s, i, i);
        isPalindrome(s, i, i + 1);
    }
    return s.substr(idx, maxLen);
};

var s = 'cbbd';
console.log(longestPalindrome(s));