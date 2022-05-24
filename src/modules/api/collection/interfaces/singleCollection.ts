export interface Meta {
	title: string;
	ogTitle: string;
	ogDescription: string;
}

export interface Price {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface Datum {
	id: number;
	name: string;
	categoryID: string;
	sold: number;
	rating: string;
	imageUrl: string;
	altText: string;
	price: Price;
	isWishlistItem: boolean;
	country: string;
}

export interface ISingleCollection {
	meta: Meta;
	data: Datum[];
	totalPages: number;
	totalCount: number;
	currentPage: number;
	nextPage: number;
	showingFrom: number;
	showingTo: number;
	from: number;
	to: number;
}
