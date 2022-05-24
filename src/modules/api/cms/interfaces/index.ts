export interface HomePageImageEntity {
	altText: string;
	imageURL: string;
	slug: string;
}

export interface GenericCardEntity {
	title: string;
	icon: string;
	viewMoreLink: string;
	banner?: HomePageImageEntity;
}
export interface PriceObj {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}

export interface ImageWithHeader extends GenericCardEntity {
	items: HomePageImageEntity[];
}
export interface StoreProductEntity {
	slug: string;
	imageURL: string;
}

export interface Image {
	imageURL: string;
	altText: string;
}

export interface Pricing {
	discountText: string[];
	oldPrice: string | null;
	price: number;
}

export interface ProductEntity {
	slug: string;
	name: string;
	image: Image;
	sold: number;
	rating: string;
	pricing: Pricing;
	country: string;
}

export interface ImageWithTitle extends HomePageImageEntity {
	title: string;
}

export interface FullWidthProducts extends GenericCardEntity {
	items: ProductEntity[];
}
export interface HalfWidthProducts extends GenericCardEntity {
	items: ProductEntity[];
}
export interface RecommendedProducts extends GenericCardEntity {
	items: ProductEntity[];
}
export interface OneThirdFeaturedProducts extends GenericCardEntity {
	items: ProductEntity[];
}

export interface FeaturedBrands extends GenericCardEntity {
	items: HomePageImageEntity[];
}
export interface OneQuarterImageWithHeader extends GenericCardEntity {
	items: HomePageImageEntity[];
}
export interface HalfWidthBanner {
	items: HomePageImageEntity[];
}

export interface FullWidthBanner {
	item: HomePageImageEntity[];
}

export interface FeaturedCategories {
	headerImage: HomePageImageEntity;
	items: ImageWithTitle[];
}

export interface Collections {
	title: string;
	count: string;
	image: HomePageImageEntity;
}

export interface Stores {
	seller: {
		sellerID: string;
		sellerName: string;
		iconURL: string;
	};
	products: StoreProductEntity[];
}

export interface FeaturedStores {
	items: Stores[];
}

export interface FeaturedCollections extends GenericCardEntity {
	items: Collections[];
}

export interface FeaturedCollectionsWithBackground {
	image: HomePageImageEntity;
	badgeText: string;
	heading: string;
	color: string;
	subHeading: string;
	buttonText: string;
	buttonSlug: string;
	underButtonText: string;
	items: HomePageImageEntity[];
}

export interface FeaturedProductsWithBanner extends GenericCardEntity {
	image: HomePageImageEntity;
	items: ProductEntity[];
}

export interface MobileCategories {
	items: ImageWithTitle[];
}
export interface MobilePopularCategories extends GenericCardEntity {
	items: ImageWithTitle[];
}

export enum ItemTypeEnum {
	SLIDER = 'SLIDER',
	THREE_ITEMS_THUMBNAILS = 'THREE_ITEMS_THUMBNAILS',
	FULL_WIDTH_PRODUCTS = 'FULL_WIDTH_PRODUCTS',
	HALF_WIDTH_PRODUCTS = 'HALF_WIDTH_PRODUCTS',
	FEATURED_COLLECTIONS = 'FEATURED_COLLECTIONS',
	FEATURED_STORES = 'FEATURED_STORES',
	THREE_ITEMS_THUMBNAILS_WITH_HEADER = 'THREE_ITEMS_THUMBNAILS_WITH_HEADER',
	FEATURED_PRODUCT_WITH_BANNER = 'FEATURED_PRODUCT_WITH_BANNER',
	FEATURED_BRANDS = 'FEATURED_BRANDS',
	FEATURED_CATEGORIES = 'FEATURED_CATEGORIES',
	HALF_WIDTH_BANNERS = 'HALF_WIDTH_BANNERS',
	FEATURED_COLLECTION_WITH_BG_IMAGE = 'FEATURED_COLLECTION_WITH_BG_IMAGE',
	ONE_THIRD_FEATURED_PRODUCT = 'ONE_THIRD_FEATURED_PRODUCT',
	ONE_QUARTER_THUMBNAILS_WITH_HEADER = 'ONE_QUARTER_THUMBNAILS_WITH_HEADER',
	FULL_WIDTH_BANNER = 'FULL_WIDTH_BANNER',
	RECOMMENDED_PRODUCTS = 'RECOMMENDED_PRODUCTS',
	// MOBILE_CATEGORIES = 'MOBILE_CATEGORIES',
	// MOBILE_POPULAR_CATEGORIES = 'MOBILE_POPULAR_CATEGORIES',
}

export interface ItemTypeMapper {
	[ItemTypeEnum.SLIDER]: HomePageImageEntity[];
	[ItemTypeEnum.THREE_ITEMS_THUMBNAILS]: HomePageImageEntity[];
	[ItemTypeEnum.FULL_WIDTH_PRODUCTS]: FullWidthProducts;
	[ItemTypeEnum.HALF_WIDTH_PRODUCTS]: HalfWidthProducts;
	[ItemTypeEnum.FEATURED_COLLECTIONS]: FeaturedCollections;
	[ItemTypeEnum.FEATURED_STORES]: FeaturedStores;
	[ItemTypeEnum.THREE_ITEMS_THUMBNAILS_WITH_HEADER]: ImageWithHeader;
	[ItemTypeEnum.FEATURED_PRODUCT_WITH_BANNER]: FeaturedProductsWithBanner;
	[ItemTypeEnum.FEATURED_BRANDS]: FeaturedBrands;
	[ItemTypeEnum.FEATURED_CATEGORIES]: FeaturedCategories;
	[ItemTypeEnum.HALF_WIDTH_BANNERS]: HomePageImageEntity[];
	[ItemTypeEnum.FEATURED_COLLECTION_WITH_BG_IMAGE]: FeaturedCollectionsWithBackground;
	[ItemTypeEnum.ONE_THIRD_FEATURED_PRODUCT]: OneThirdFeaturedProducts;
	[ItemTypeEnum.ONE_QUARTER_THUMBNAILS_WITH_HEADER]: OneQuarterImageWithHeader;
	[ItemTypeEnum.FULL_WIDTH_BANNER]: HomePageImageEntity;
	[ItemTypeEnum.RECOMMENDED_PRODUCTS]: RecommendedProducts;
	// [ItemTypeEnum.MOBILE_CATEGORIES]: MobileCategories;
	// [ItemTypeEnum.MOBILE_POPULAR_CATEGORIES]: MobilePopularCategories;
}

export interface HomePageEntity<T = any> {
	order: number;
	itemType: ItemTypeEnum;
	item: T;
	isMobile?: boolean;
}

export function homepageTypeHelper<T extends ItemTypeEnum>(
	itemType: T,
	obj: HomePageEntity,
): HomePageEntity<ItemTypeMapper[T]> {
	return obj;
}

export interface IPaginateProduct {
	items: ProductEntity[];
	total?: number;
	totalPages: number;
	pageNumber: number;
	nexPage?: number;
}

export interface IHomepageBlogs {
	id: number;
	date: string;
	link: string;
	title: string;
	content: string;
	excerpt: string;
	image: string;
}
