/**
 * 寻找两个有序数组的中位数
 */

/**
 * 复杂度 O(min(m,n)),加入二分查找后可优化成o(log(min(m,n)))，细节处理繁琐
 * key point，对两个数组做切分，左边界上的值小于右边界上的值。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	if (nums1.length === 1 && nums2.length === 1) {
		return (nums1[0] + nums2[0]) / 2;
	}
	if (nums1.length === 1 && nums2.length === 0) {
		return nums1[0];
	}
	if (nums1.length === 0 && nums2.length === 1) {
		return nums2[0];
	}

	let Left, Right, left, right;
	let i = -1;
	let leftTotal;
	const total = nums1.length + nums2.length;
	if (total % 2 === 0) {
		leftTotal = total / 2;
	} else {
		leftTotal = (total + 1) / 2;
	}
	while (i < nums1.length) {
		let LeftLength = 0;
		let leftLength = 0;
		Left = nums1[i];
		Right = nums1[i + 1];
		const leftIndex = leftTotal - i - 2;
		left = nums2[leftIndex];
		right = nums2[leftIndex + 1];

		if (Left !== undefined) LeftLength = i + 1;
		if (left !== undefined) leftLength = leftIndex + 1;

		Left === undefined ? (Left = left) : '';
		Right === undefined ? (Right = right) : '';
		left === undefined ? (left = Left) : '';
		right === undefined ? (right = Right) : '';

		const L = Math.max(Left, left);
		const R = Math.min(Right, right);
		if (
			Left <= right &&
			left <= Right &&
			(LeftLength + leftLength) * 2 >= total
		) {
			if (total % 2 === 0) {
				return (L + R) / 2;
			} else {
				return L;
			}
		}
		i++;
	}
};

/**
 * 查Top K问题 O(log(m+n))
 * @param {*} nums1
 * @param {*} nums2
 */
var findMedianSortedArrays = (nums1, nums2) => {
	const findKth = (nums1, i, nums2, j, k) => {
		const d = Math.floor(k / 2);
		if (nums1.length - i > nums2.length - j)
			return findKth(nums2, j, nums1, i, k);

		if (nums1.length === i) return nums2[j - 1 + k];

		if (k === 1) return Math.min(nums1[i], nums2[j]);

		const si = Math.min(i + d, nums1.length);
		const sj = j + d;
		if (nums1[si - 1] > nums2[sj - 1]) {
			return findKth(nums1, i, nums2, sj, k - d);
		} else {
			return findKth(nums1, si, nums2, j, k - (si - i));
		}
	};

	const m = nums1.length;
	const n = nums2.length;
	const total = m + n;
	if (total % 2 === 0) {
		const left = findKth(nums1, 0, nums2, 0, total / 2);
		const right = findKth(nums1, 0, nums2, 0, total / 2 + 1);
		console.log(left, right);
		return (left + right) / 2;
	} else {
		return findKth(nums1, 0, nums2, 0, (total + 1) / 2);
	}
};
