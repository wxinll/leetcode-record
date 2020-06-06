/**
 * z字反转
 * @param {*} s
 * @param {*} numRows
 */
var convert = function (s, numRows) {
	if (numRows === 1) return s;
	const row = [];
	let res = '';
	let rowIndex = 0;
	let d = -1;
	for (let i = 0; i < s.length; i++) {
		if (!row[rowIndex]) {
			row[rowIndex] = [];
		}
		row[rowIndex].push(s[i]);
		if ((rowIndex + 1) % numRows === 0) {
			d = -1;
		}
		if ((rowIndex + 1) % numRows === 1) {
			d = 1;
		}
		if (d > 0) {
			rowIndex++;
		} else {
			rowIndex--;
		}
	}
	for (let i = 0; i < numRows; i++) {
		if (row[i]) {
			res += row[i].join('');
		}
	}
	return res;
};
