/* eslint-disable quotes */
export interface IImage {
	image: string;
	link: string;
	alt: string;
}

export interface IExtra {
	icon: string;
	header: string;
}

export interface IExtra2 extends IExtra {
	viewMore: string;
}

export interface IMainSlider extends IExtra {
	data: IImage[];
}

export interface Products {}

export interface IFeatured {
	featureImage: IImage;
	Products: Products;
}

export interface FeaturedImage extends IExtra {
	data: IFeatured[];
}

export interface IProduct {
	_id: string;
	product_id: string;
	category_id: string;
	title: string;
	image: string;
	regular_price: number;
	sale_price: number;
	discount: number;
	rating: string;
	sold: number;
	section_name: string;
	updated_at: Date;
	created_at: Date;
}

export interface IProductSection extends IExtra2 {
	data: IProduct[];
}

export interface IProductSection2 extends IProductSection {
	featureImage: string;
}

export interface Specification {
	key: string;
	value: string;
}

export interface PriceStock {
	availability: string;
	color: string;
	size: number;
	price: number;
	quantity: number;
	image: string;
	sellerSKU: string;
	globalSKU: string;
	freeItems: string;
}

export interface ServiceDelivery {
	_id: string;
	warrentyType: string;
	warrentyPeriod: string;
	warrentyPolicy: string;
	packageWeight: string;
	packageDimentions: string;
	dangerousGood: string;
}

export interface Size {
	sizeType: string;
	size: any[];
}

export interface Color {
	propertyValueId: number;
	color: string;
}

export interface Size2 {
	propertyValueId: number;
	size: string;
}

export interface SkuBase {
	color: Color[];
	size: Size2[];
}

export interface Varient {
	color: any[];
	size: Size;
	price: any[];
	skuBase: SkuBase;
}

export interface Product {
	image: string[];
	specification: Specification[];
	priceStock: PriceStock[];
	status: string;
	_id: string;
	productID: number;
	productName: string;
	categoryId: string;
	video: string;
	highlights: string;
	longDescription: string;
	englishDescription: string;
	whatInTheBox: string;
	serviceDelivery: ServiceDelivery;
	varient: Varient;
	sellerID: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface PriceStock2 {
	availability: string;
	color: string;
	size: number;
	price: number;
	quantity: number;
	image: string;
	sellerSKU: string;
	globalSKU: string;
	freeItems: string;
}

export interface ServiceDelivery2 {
	_id: string;
	warrentyType: string;
	warrentyPeriod: string;
	warrentyPolicy: string;
	packageWeight: string;
	packageDimentions: string;
	dangerousGood: string;
}

export interface Size3 {
	sizeType: string;
	size: any[];
}

export interface Color2 {
	propertyValueId: number;
	color: string;
}

export interface Size4 {
	propertyValueId: number;
	size: string;
}

export interface SkuBase2 {
	color: Color2[];
	size: Size4[];
}

export interface Varient2 {
	color: any[];
	size: Size3;
	price: any[];
	skuBase: SkuBase2;
}

export interface Gift {
	image: string[];
	specification: any[];
	priceStock: PriceStock2[];
	status: string;
	_id: string;
	productName: string;
	categoryId: string;
	video: string;
	highlights: string;
	longDescription: string;
	englishDescription: string;
	whatInTheBox: string;
	serviceDelivery: ServiceDelivery2;
	productID: number;
	varient: Varient2;
	sellerID: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface SpecialOffers {
	product: Product;
	gift: Gift;
}

export interface PromotionImage {
	icon: string;
	header: string;
	data: IImage[];
}

export interface ICollectionItem extends IImage {
	title: string;
	productCount: string;
}

export interface ICollections {
	icon: string;
	header: string;
	subHeader: string;
	viewMore: string;
	data: ICollectionItem[];
}

export interface ISellerProduct {
	id: number;
	image: string;
}

export interface ITopSeller {
	sellerImage: string;
	sellerName: string;
	sellerId: string;
	product: ISellerProduct[];
}

export interface ITopSellers extends IExtra2 {
	data: ITopSeller[];
}

export interface Products2 {}

export interface ITopBrand {
	featureImage: IImage;
	Products: Products2;
}

export interface ITopBrands extends IExtra2 {
	data: ITopBrand[];
}

export interface ICatImage extends IImage {
	title: string;
}

export interface IDetails {
	tagLine: string;
	shopNowBtn: string;
	btnColor: string;
	sectionHeader: string;
	header: string;
	subHeader: string;
	offerText: string;
}

export interface ICategoryHighlight {
	featureImage: IImage;
	catImage: ICatImage[];
	details: IDetails;
	products: IProduct[];
}

export interface ICategoryListing {
	featureImage: IImage;
	catImage: ICatImage[];
}

export interface TwoSmallBanner extends IExtra {
	data: IImage[];
}

export interface Products3 {}

export interface Datum14 {
	featureImage: IImage;
	Products: Products3;
}

export interface ShopByBrand extends IExtra {
	data: Datum14[];
}

export interface BudgetShopping extends IExtra {
	data: IImage[];
}

export interface Products4 {}

export interface Datum22 {
	featureImage: IImage;
	Products: Products4;
}

export interface IBannerSlider extends IExtra2 {
	data: IImage[];
}

export interface OnlyZdropOfferBanner extends IExtra {
	data: IImage[];
}

export interface IBrandCategory {
	ID: number;
	Title: string;
	PID: number;
}

export interface IBrandImage {
	id: number;
	title: string;
	pid: number;
	brand_logo: string;
	image: string;
	items: number;
}

export interface Data {
	brandCategory: IBrandCategory[];
	brandImages: IBrandImage[];
}

export interface ITopBrand {
	header: string;
	subHeader: string;
	data: Data;
}

export interface IHomepage {
	section: string;
	sectionName: string;
	main_slider: IMainSlider;
	featured_image: FeaturedImage;
	super_deal: IProductSection;
	new_arrival: IProductSection;
	top_selections: IProductSection;
	specialOffers: SpecialOffers;
	promotion_image: PromotionImage;
	collections: ICollections;
	topSellers: ITopSellers;
	consumer_electronics: IProductSection;
	new_laptop_for_you: IProductSection2;
	all_the_brands_you_love: ITopBrands;
	offer_section: ICategoryHighlight[];
	first_category_highlight: ICategoryListing[];
	second_category_highlight: ICategoryListing[];
	two_small_banner: TwoSmallBanner;
	shop_by_brand: ShopByBrand;
	budget_shopping: IBannerSlider;
	camera_accessories: IProductSection;
	women_shoes: IProductSection;
	toy_collections: IProductSection;
	mobile_accessories: IProductSection;
	mens_shoes: IProductSection;
	bags: IProductSection;
	"women's_collections": IBannerSlider;
	only_zdrop_offer_banner: OnlyZdropOfferBanner;
	recommended_for_you: IProductSection;
	top_brand: ITopBrand;
}
