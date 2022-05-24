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

export interface IStore {
	banner: Banner[];
	storeInfo: StoreInfo;
}

export interface Price {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface INewArrival {
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

export interface Price2 {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface IBestSelling {
	id: number;
	name: string;
	categoryID: string;
	sold: number;
	rating: string;
	imageUrl: string;
	altText: string;
	price: Price2;
	isWishlistItem: boolean;
	country: string;
}

export interface IBestSellings {
	data: IBestSelling[];
	totalPages: number;
	totalCount: number;
	currentPage: number;
	nextPage: number;
	showingFrom: number;
	showingTo: number;
	from: number;
	to: number;
}

export interface IShopHomepage {
	store: IStore;
	newArrival: INewArrival[];
	bestSelling: IBestSellings;
}
