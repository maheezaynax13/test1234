interface HomePageImageEntity {
	altText: string;
	imageURL: string;
	slug: string;
}

interface GenericCardEntity {
	title: string;
	icon: string;
	viewMoreLink: string;
	banner?: HomePageImageEntity;
}

interface StoreProductEntity {
	slug: string;
	imageURL: string;
}

interface Image {
	imageURL: string;
	altText: string;
}

interface Pricing {
	discountText: string[];
	oldPrice: string | null;
	price: number;
}

interface ProductEntity {
	slug: string;
	name: string;
	image: Image;
	sold: number;
	rating: string;
	pricing: Pricing;
	country: string;
}

interface Collections {
	title: string;
	count: string;
	image: HomePageImageEntity;
}

interface Stores {
	seller: {
		sellerID: string;
		sellerName: string;
		iconURL: string;
	};
	products: StoreProductEntity[];
}

interface ImageWithTitle extends HomePageImageEntity {
	title: string;
}

interface ImageWithHeader extends GenericCardEntity {
	items: HomePageImageEntity[];
}

interface MobileCategory extends HomePageImageEntity {
	title: string;
}

interface GenericProducts extends GenericCardEntity {
	items: ProductEntity[];
}

interface FeaturedBrands extends GenericCardEntity {
	items: HomePageImageEntity[];
}
interface OneQuarterImageWithHeader extends GenericCardEntity {
	items: HomePageImageEntity[];
}
interface HalfWidthBanner {
	items: HomePageImageEntity[];
}

interface FeaturedCategories {
	headerImage: HomePageImageEntity;
	items: ImageWithTitle[];
}

interface FeaturedStores extends GenericCardEntity {
	items: Stores[];
}

interface FeaturedCollections extends GenericCardEntity {
	items: Collections[];
}

interface FeaturedCollectionsWithBackground {
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

interface FeaturedProductsWithBanner extends GenericCardEntity {
	image: HomePageImageEntity;
	items: ProductEntity[];
}

interface MobilePopularCategories extends GenericCardEntity {
	items: ImageWithTitle[];
}

type HomePageGarbageData = {
	isMobile: boolean;
	order: number;
	id: string;
};

type SliderType = {
	itemType: 'SLIDER';
	item: HomePageImageEntity[];
};

type MobileCategoriesType = {
	itemType: 'MOBILE_CATEGORIES';
	item: MobileCategory[];
};

type MobilePopularCategoriesType = {
	itemType: 'MOBILE_POPULAR_CATEGORIES';
	item: MobilePopularCategories;
};

type FeaturedProductsWithBannerType = {
	itemType: 'FEATURED_PRODUCT_WITH_BANNER';
	item: FeaturedProductsWithBanner;
};

type FeaturedCollectionsWithBackgroundType = {
	itemType: 'FEATURED_COLLECTION_WITH_BG_IMAGE';
	item: FeaturedCollectionsWithBackground;
};

type FeaturedCollectionsType = {
	itemType: 'FEATURED_COLLECTIONS';
	item: FeaturedCollections;
};

type FeaturedStoresType = {
	itemType: 'FEATURED_STORES';
	item: FeaturedStores;
};

type FeaturedBrandsType = {
	itemType: 'FEATURED_BRANDS';
	item: FeaturedBrands;
};

type FeaturedCategoriesType = {
	itemType: 'FEATURED_CATEGORIES';
	item: FeaturedCategories;
};

type FullWidthBannerType = {
	itemType: 'FULL_WIDTH_BANNER';
	item: HomePageImageEntity[];
};

type HalfWidthBannerType = {
	itemType: 'HALF_WIDTH_BANNERS';
	item: HalfWidthBanner;
};

type ThreeItemsThumbnailsWithHeaderType = {
	itemType: 'THREE_ITEMS_THUMBNAILS_WITH_HEADER';
	item: ImageWithHeader;
};

type OneQuarterImageWithHeaderType = {
	itemType: 'ONE_QUARTER_THUMBNAILS_WITH_HEADER';
	item: OneQuarterImageWithHeader;
};

type GenericProductsType = {
	itemType: 'FULL_WIDTH_PRODUCTS' | 'HALF_WIDTH_PRODUCTS' | 'ONE_THIRD_FEATURED_PRODUCT' | 'RECOMMENDED_PRODUCTS';
	item: GenericProducts;
};

// export enum ItemTypeEnum {
// 	SLIDER = 'SLIDER',
// 	THREE_ITEMS_THUMBNAILS = 'THREE_ITEMS_THUMBNAILS',
// 	FULL_WIDTH_PRODUCTS = 'FULL_WIDTH_PRODUCTS',
// 	HALF_WIDTH_PRODUCTS = 'HALF_WIDTH_PRODUCTS',
// 	FEATURED_COLLECTIONS = 'FEATURED_COLLECTIONS',
// 	FEATURED_STORES = 'FEATURED_STORES',
// 	THREE_ITEMS_THUMBNAILS_WITH_HEADER = 'THREE_ITEMS_THUMBNAILS_WITH_HEADER',
// 	FEATURED_PRODUCT_WITH_BANNER = 'FEATURED_PRODUCT_WITH_BANNER',
// 	FEATURED_BRANDS = 'FEATURED_BRANDS',
// 	FEATURED_CATEGORIES = 'FEATURED_CATEGORIES',
// 	HALF_WIDTH_BANNERS = 'HALF_WIDTH_BANNERS',
// 	FEATURED_COLLECTION_WITH_BG_IMAGE = 'FEATURED_COLLECTION_WITH_BG_IMAGE',
// 	ONE_THIRD_FEATURED_PRODUCT = 'ONE_THIRD_FEATURED_PRODUCT',
// 	ONE_QUARTER_THUMBNAILS_WITH_HEADER = 'ONE_QUARTER_THUMBNAILS_WITH_HEADER',
// 	FULL_WIDTH_BANNER = 'FULL_WIDTH_BANNER',
// 	RECOMMENDED_PRODUCTS = 'RECOMMENDED_PRODUCTS',
// 	MOBILE_CATEGORIES = 'MOBILE_CATEGORIES',
// 	MOBILE_POPULAR_CATEGORIES = 'MOBILE_POPULAR_CATEGORIES',
// }

export type IHHomepage = HomePageGarbageData &
	(
		| SliderType
		| MobileCategoriesType
		| MobilePopularCategoriesType
		| FeaturedProductsWithBannerType
		| FeaturedCollectionsWithBackgroundType
		| FeaturedCollectionsType
		| FeaturedStoresType
		| FeaturedBrandsType
		| FeaturedCategoriesType
		| FullWidthBannerType
		| HalfWidthBannerType
		| ThreeItemsThumbnailsWithHeaderType
		| OneQuarterImageWithHeaderType
		| GenericProductsType
	);
