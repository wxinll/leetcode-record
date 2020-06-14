//  11. 盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 * 复杂度 n^2
 */
var maxArea = function (height) {
	const length = height.length;
	let max = 0;
	for (let i = 0; i < length - 1; i++) {
		const am = height[i];
		for (let j = i + 1; j < length; j++) {
			const an = height[j];
			const s = Math.min(am, an) * (j - i);
			max = Math.max(s, max);
		}
	}
	return max;
};

// 复杂度 n
var maxArea = function (height) {
	const length = height.length;
	let max = 0;
	let i = 0;
	let j = length - 1;
	while (i < j) {
		const s = Math.min(height[i], height[j]) * (j - i);
		max = Math.max(s, max);
		if (height[i] > height[j]) {
			j--;
		} else {
			i++;
		}
	}
	return max;
};
