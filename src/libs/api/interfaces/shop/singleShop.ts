interface Image {
	imageURL: string;
	altText: string;
}

interface Facet {
	name: string;
	values: string[];
	displayName: string;
}

interface Pricing {
	discountText: any[];
	oldPrice?: any;
	price: number;
}

interface Item {
	slug: string;
	name: string;
	image: Image;
	sold?: number;
	rating: string;
	pricing: Pricing;
	country: string;
}

export interface IShop {
	items: Item[];
	facets?: Facet[];
	total: number;
	totalPages: number;
	nextPage: number;
	pageNumber: number;
}
