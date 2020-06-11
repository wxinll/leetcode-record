/**
 *
 * 实现正则表达式 .*匹配
 * 动态规划
 */
var isMatch = function (s, p) {
	if (s === '' && p === '') return true;
	let i = 0;
	let j = 0;
	const matchCase = (i, j) => {
		// console.log(i, j);
		if (p[j + 1] && p[j + 1] === '*') {
			if (!s[i] && !p[j + 2]) {
				return true;
			}

			if ((s[i] && p[j] === '.') || p[j] === s[i]) {
				if (i === s.length - 1 && j + 1 === p.length - 1) return true;
				if (matchCase(i + 1, j)) {
					return true;
				}
			}
			return matchCase(i, j + 2);
		}
		if ((s[i] && p[j] === '.') || p[j] === s[i]) {
			if (i === s.length - 1 && j === p.length - 1) {
				return true;
			}
			return matchCase(i + 1, j + 1);
		}
		return false;
	};
	return matchCase(i, j);
};
