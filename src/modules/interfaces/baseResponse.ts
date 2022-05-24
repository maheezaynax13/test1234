export interface BR<T> {
	success: boolean;
	data: T;
	message?: string | string[];
}

export interface IPagination<T> {
	data: T;
	totalPages: number;
	totalCount: number;
	currentPage: number;
	nextPage: number;
	showingFrom: number;
	showingTo: number;
}
