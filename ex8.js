var myAtoi = function (str) {
	const MAX = 2147483647;
	const MIN = -2147483648;
	let num = '';
	for (let i = 0; i < str.length; i++) {
		const s = str[i];
		const code = s.charCodeAt();
		if (code >= 48 && code <= 57) {
			num += s;
			continue;
		}
		if ((s === '-' || s === '+') && num.length === 0) {
			num += s;
			continue;
		}
		if (s === ' ' && num.length === 0) {
			continue;
		}
		break;
	}
	num -= 0;
	if (!num && num !== undefined && num !== 0) {
		// NaN
		return 0;
	}
	if (num > MAX) {
		return MAX;
	}
	if (num < MIN) {
		return MIN;
	}
	return num;
};
