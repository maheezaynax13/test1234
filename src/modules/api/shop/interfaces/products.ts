export interface Banner {
	imageUrl: string;
	link: string;
	altText: string;
}

export interface StoreInfo {
	storeID: string;
	storeName: string;
	logo: string;
	altText: string;
}

export interface Store {
	banner: Banner[];
	storeInfo: StoreInfo;
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

export interface Products {
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

export interface IShopProducts {
	store: Store;
	products: Products;
}
