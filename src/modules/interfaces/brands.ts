export interface IBanner {
	imageUrl: string;
	link: string;
	alt: string;
}

export interface Item {
	id: number;
	title: string;
	pid: number;
	brand_logo: string;
	image: string;
	items: number;
}

export interface IAllBrands {
	title: string;
	items: Item[];
}

export interface ITopBrands {
	banner: IBanner[];
	allBrands: IAllBrands[];
}
