export const paginationRanges = (current: number, total: number): number[] | string[] => {
	const delta = 2;
	const left = current - delta;
	const right = current + delta + 1;
	const range = [];
	const rangeWithDots = [];
	let l: number;

	for (let i = 1; i <= total; i++) {
		if (i === 1 || i === total || (i >= left && i < right)) {
			range.push(i);
		}
	}

	for (const i of range) {
		if (l) {
			if (i - l === 2) {
				rangeWithDots.push(l + 1);
			} else if (i - l !== 1) {
				rangeWithDots.push('...');
			}
		}
		rangeWithDots.push(i);
		l = i;
	}

	return rangeWithDots;
};
