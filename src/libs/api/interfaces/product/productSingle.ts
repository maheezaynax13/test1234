export interface StarRating {
	count: string;
	percentage: string;
}

export interface Rate {
	oneStar: StarRating;
	twoStar: StarRating;
	threeStar: StarRating;
	fourStar: StarRating;
	fiveStar: StarRating;
}

export interface ProductReview {
	rate: Rate;
	product: string;
	averageRating: string;
	totalRating: string;
	totalReviewCount: string;
	id: string;
}

export interface MetaTags {
	product: string;
	keywords: string[];
	title: string;
	description: string;
	imageURL: string;
	id: string;
}

export interface Variant {
	stockRemaining: number;
	available: boolean;
	attributes: Record<string, string>;
	price: number;
	oldPrice: number;
	skuID: string;
	sellerSKU: string;
}

export interface Stock {
	product: string;
	variants: Variant[];
	id: string;
}

export interface ShippingInfo {
	product: string;
	fulfilledBy: string;
	id: string;
}

export interface Brand {
	imageURL?: any;
	brandScore: number;
	category?: any;
	name: string;
	slug: string;
	id: string;
}

export interface Category {
	imageURL?: any;
	isMegamenuItem: boolean;
	categoryID: string;
	leaf: boolean;
	categoryName: string;
	dCategoryID: string;
	slug: string;
	parentID: string;
	id: string;
}

export interface ImageURL {
	_id: string;
	big: string;
	medium: string;
	small: string;
}

export interface Attribute {
	imageURL: ImageURL;
	name: string;
	hasImage: boolean;
	value: string;
}

export interface Seller {
	sellerID: string;
	name: string;
	slug: string;
	imageURL: string;
	sellerOrigin?: string;
	country: string;
}

export interface MainImage {
	big: string;
	medium: string;
	small: string;
}

export interface Pricing {
	discountType?: 'PERCENT' | 'FREE_SHIPPING' | 'CASH_DISCOUNT';
	discountText?: string;
	oldPrice: number;
	price: number;
}

export interface PackageInfo {
	height: string;
	weight: string;
	length: string;
	width: string;
	boxContents: string;
}

export interface ISingleProductImage {
	isVideo?: boolean;
	big: string;
	medium: string;
	small: string;
}

export interface Policies {
	availableReturnDays: string;
	hasWarranty: boolean;
}

export interface Specification {
	name: string;
	value: string;
}

export interface Breadcrumbs {
	category: string;
	slug: string;
}

export interface ISingleProduct {
	videoURL?: string;
	origin: string;
	orderCount: number;
	hasSizeGuide?: boolean;
	averageRating: number;
	codAvailable: boolean;
	productReview: ProductReview;
	metaTags: MetaTags;
	stock: Stock;
	shippingInfo: ShippingInfo;
	brand: Brand;
	category: Category;
	name: string;
	attributes: Attribute[];
	seller: Seller;
	mainImage: MainImage;
	longDescription: string;
	shortDescription: string;
	slug: string;
	pricing: Pricing;
	packageInfo: PackageInfo;
	productID: string;
	images: ISingleProductImage[];
	policies: Policies;
	specification: Specification[];
	id: string;
	breadcrumbs: Breadcrumbs[];
	isWishlistItem: boolean;
}
