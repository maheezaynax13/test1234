import { IPagination } from '../baseResponse';

export interface CollectionInfo {
	title: string;
	slug: string;
}

export interface Image {
	imageURL: string;
	altText: string;
}

export interface Pricing {
	discountText: any[];
	oldPrice?: any;
	price: number;
}

export interface Item {
	slug: string;
	name: string;
	image: Image;
	sold: number;
	rating: string;
	pricing: Pricing;
	country: string;
}

export interface ICollection extends IPagination<Item[]> {
	collectionInfo: CollectionInfo;
}
