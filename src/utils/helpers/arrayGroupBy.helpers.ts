// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const arrGroupBy = (arr: any[], key: string): any[] => {
	if (arr?.length > 0) {
		return arr.reduce((r, a) => {
			r[a[`${key}`]] = r[a[`${key}`]] || [];
			r[a[`${key}`]].push(a);
			return r;
		}, Object.create(null));
	}
};
