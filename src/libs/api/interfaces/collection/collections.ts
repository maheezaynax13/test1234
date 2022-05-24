export interface Banner {
	imageURL: string;
	altText: string;
}

export interface Image {
	imageURL: string;
	altText: string;
	slug: string;
}

export interface Item {
	title: string;
	image: Image;
	count: number;
}

export interface ICollections {
	banner: Banner;
	items: Item[];
	total: number;
	totalPages: number;
	nextPage: number;
	pageNumber: number;
}
