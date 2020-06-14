/**
 * 千位数转换为罗马数字
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const hash = {
		0: '',
		1: 'I',
		5: 'V',
		10: 'X',
		50: 'L',
		100: 'C',
		500: 'D',
		1000: 'M',
	};
	let th = Math.floor(num / 1000);
	let hd = Math.floor((num % 1000) / 100);
	let te = Math.floor((num % 100) / 10);
	let un = num % 10;
	const convert = (n, c) => {
		if (hash[n * c]) return hash[n * c];

		if (n < 5) {
			if (n === 4) {
				// IV
				n = hash[1 * c] + hash[5 * c];
			} else {
				n = new Array(n).fill(hash[1 * c]).join('');
			}
		} else if (n < 10) {
			if (n === 9) {
				// IX
				n = hash[1 * c] + hash[10 * c];
			} else {
				// VII
				n = hash[5 * c] + new Array(n - 5).fill(hash[1 * c]).join('');
			}
		}
		return n;
	};

	th = convert(th, 1000);
	hd = convert(hd, 100);
	te = convert(te, 10);
	un = convert(un, 1);
	return th + hd + te + un;
};
