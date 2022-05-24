export interface Image {
	imageURL: string;
	altText: string;
}

export interface Pricing {
	discountText: any[];
	oldPrice?: any;
	price: number;
}

export interface IProduct {
	slug: string;
	name: string;
	image: Image;
	sold: number;
	rating: string;
	pricing: Pricing;
	country: string;
}

export interface ICartProductSuggestion {
	items: IProduct[];
	total: number;
	totalPages: number;
	pageNumber: number;
	nextPage: number;
}
