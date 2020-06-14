/**
 * 回文字符串的判断
 */
var isPalindrome = function (x) {
	const rs = new String(x).split('').reverse().join('');
	return x === rs - 0;
};
