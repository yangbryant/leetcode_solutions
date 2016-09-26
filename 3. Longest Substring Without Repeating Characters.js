/**
 * Created by everyoo.com on 16/9/5.
 */

//function lengthOfLongestSubstring(s) {
//    const map = {};
//    var left = 0;
//    
//    return s.split('').reduce((max, v, i) => {
//        left = map[v] >= left ? map[v] + 1 : left;
//        map[v] = i;
//        return Math.max(max, i - left + 1);
//    }, 0);
//}

var lengthOfLongestSubstring = function(s) {
    var result = "";
    var length = 0;
    var tmp = 0;
    
    for (var i = 0; i < s.length; i++) {
        let index = result.indexOf(s.charAt(i));
//        console.log("index is = " + index);
        if (index === -1) {
            result += s.charAt(i);
//            console.log(result);
        }
        else {
            length = result.length > length ? result.length : length;
            tmp += index + 1;
            i = tmp;
//            console.log(result  + "~" + tmp);
            result = s.charAt(i);
        }
//        console.log("i = " + i);
    }
    length = result.length > length ? result.length : length;

    return length;
};

var str = "goodjob"
//var str = "abcabcbb"
//var str = "dvdf"
console.log(lengthOfLongestSubstring(str))

