export interface Image {
	big: string;
	medium: string;
	small: string;
}

export interface Attributes {
	size: string;
	color: string;
}

export interface Pricing {
	discountText: any[];
	oldPrice?: any;
	price: number;
}

export interface IWishlistItem {
	productID: string;
	skuID: string;
	name: string;
	slug: string;
	image: Image;
	attributes: Attributes;
	brand: string;
	weight: string;
	pricing: Pricing;
	isAvailable: boolean;
	isWishlisted: boolean;
}
