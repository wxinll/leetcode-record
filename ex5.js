/**
 * 求解字符串中最长的回文字符串
 * eg: 'aa' 'abcba'
 * @param {string} s
 * @return {string}
 */

/**
 * 暴力解，拿所有子串判断
 * O(n^3)
 */
var longestPalindrome = function (s) {
	const isH = (str) => {
		const L = str.length;
		for (let i = 0; i < Math.floor(L / 2); i++) {
			if (str[i] === str[L - i - 1]) {
				continue;
			} else {``
				return false;
			}
		}
		return true;
	};

	if (isH(s)) return s;
	let maxL = 0;
	let subStr;
	let res = '';
	for (let i = 0; i < s.length; i++) {
		subStr = s.charAt(i);
		if (maxL === 0) {
			maxL = 1;
			res = subStr;
		}
		for (let j = i + 1; j < s.length; j++) {
			subStr += s.charAt(j);
			if (isH(subStr)) {
				if (subStr.length > maxL) {
					maxL = subStr.length;
					res = subStr;
				}
			}
		}
	}
	return res;
};
