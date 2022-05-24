export interface BR<T> {
	success: boolean;
	data: T;
	message?: string | string[];
}

export interface IPagination<T> {
	items: T;
	pageNumber: number;
	nextPage: number | null;
	totalPages: number | null;
	total: number | null;
}

export interface OmitProduct {
	slug: string;
	name: string;
	image: {
		imageURL: string;
		altText: string;
	};
	sold?: string;
	rating?: string;
	pricing: {
		discountText: string[];
		price: number;
		oldPrice: number | null;
	};
	country?: string;
}
