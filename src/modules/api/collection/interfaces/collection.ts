export interface Banner {
	imageUrl: string;
	link: string;
	altText: string;
}

export interface ICollection {
	imageUrl: string;
	link: string;
	altText: string;
	title: string;
	id: string;
	productCount: string;
}

export interface Collections {
	data: ICollection[];
	totalPages: number;
	totalCount: number;
	currentPage: number;
	nextPage?: any;
	showingFrom: number;
	showingTo: number;
	from: number;
	to: number;
}

export interface ICollections {
	banner: Banner;
	collections: Collections;
}
