interface IPrice {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface IImage {
	imageUrl: string;
	altText: string;
}

export interface IProduct extends IImage {
	id: number;
	name: string;
	categoryID: string;
	sold: number;
	rating: number;
	price: IPrice;
}

export interface IStore extends IImage {
	id: string;
	name: string;
}

export interface INameLang {
	en: string;
	bn: string;
}

export interface IAddress {
	region: string;
	city: string;
	area: string;
}
