/**
 * @param {number} n
 * @return {string}
 */
//var countAndSay = function(n) {
//	var rst, cur, cnt;
//	rst = "1";
//	for (var i = 1; i < n; i++) {
//		cur = "";
//		cnt = 1;
//		for (var j = 0; j < rst.length; j++) {
//			if (rst[j+1] === rst[j]) {
//				cnt++;
//			} else {
//				cur += cnt + rst[j];
//				cnt = 1;
//			}
//		}
//		rst = cur;
//	}
//	return rst;
//};

var countIdx = function(s) {
	var rst = "";
	var cnt = 1;
	for (var i = 0; i < s.length; i++) {
		if (s[i] === s[i+1]) {
			cnt++;
		}
		else {
			rst += cnt + s[i];
			cnt = 1;
		}
	}
	return rst;
};

var countAndSay = function(n) {
	if (--n > 0) {
		return countIdx(countAndSay(n));
	}
	else {
		return "1";
	}
};


console.log(countAndSay(6));