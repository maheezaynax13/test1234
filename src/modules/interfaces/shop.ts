export interface Banner {
	imageUrl: string;
	link: string;
	altText: string;
}

export interface TopBrand {
	id: number;
	title: string;
	pid: number;
	brand_logo: string;
	image: string;
	isTopBrand: boolean;
	items: number;
}

export interface Store {
	imageUrl: string;
	altText: string;
	name: string;
	id: string;
}

export interface Price {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface Product {
	id: number;
	name: string;
	categoryID: string;
	sold: number;
	rating: number;
	imageUrl: string;
	altText: string;
	price: Price;
}

export interface Result {
	store: Store;
	products: Product[];
}

export interface IAllStore {
	category: string;
	categoryId: string;
	result: Result[];
}

export interface Store2 {
	imageUrl: string;
	altText: string;
	name: string;
	id: string;
}

export interface Price2 {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface Product2 {
	id: number;
	name: string;
	categoryID: string;
	sold: number;
	rating: number;
	imageUrl: string;
	altText: string;
	price: Price2;
}

export interface ITopStore {
	store: Store2;
	products: Product2[];
}

export interface IStoreResponse {
	banner: Banner[];
	topBrands: TopBrand[];
	allStores: IAllStore[];
	topStores: ITopStore[];
}
