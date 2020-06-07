/**
 * 
 * @param {*} x 
 */
var reverse = function (x) {
	x = x.toString();
	let xM = '';
	let s = '';
	if (x[0] === '-') {
		xM = x.slice(1, x.length + 1);
		s = '-';
	} else {
		xM = x;
	}
	const r = s + xM.split('').reverse().join('') - 0;

	const L = Math.pow(2, 31);
	if (r > L - 1 || r < -L) {
		return 0;
	}
	return r;
};
