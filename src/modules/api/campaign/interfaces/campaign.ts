export interface Meta {
	backgroundColor: string;
	textColor: string;
	slug: string;
	ogTitle: string;
	ogDescription: string;
}

export interface Price {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface ICampaignContent {
	imageUrl: string;
	pageName: string;
	sectionName: string;
	link: string;
	altText: string;
	isActive: boolean;
	id: any;
	name: string;
	categoryID: string;
	sold?: number;
	rating: string;
	price: Price;
	isWishlistItem?: boolean;
	country: string;
	title: string;
}

export interface ICampaignSection {
	id: number;
	type: 'banner' | 'product' | 'category' | 'card' | 'cardSlider';
	name: string;
	content: ICampaignContent[];
	title: string;
	icon?: any;
	viewMore?: any;
}

export interface ICampaign {
	meta: Meta;
	sections: ICampaignSection[];
}
