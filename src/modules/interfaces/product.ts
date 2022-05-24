export interface IImageModule {
	large: string;
	small: string;
	alt: string;
}

export interface ISpecsModule {
	key: string;
	value: string;
}

export interface PriceStock {
	availability: string;
	color: string;
	size: string;
	price: number;
	quantity: number;
	image: string;
	smallImage: string;
	sellerSKU: string;
	globalSKU: string;
	freeItems: string;
}

export interface CurrentPriceModule {
	formatedAmount: string;
	value: number;
}

export interface OldPriceModule {
	formatedAmount: string;
	value: number;
}

export interface IPriceModule {
	priceStock: PriceStock[];
	discount: number;
	currentPriceModule: CurrentPriceModule;
	oldPriceModule: OldPriceModule;
}

export interface ShippingModule {
	company: string;
	condition: string;
}

export interface IAddress {
	name: string;
	value: string;
	charge: number;
}

export interface IDeliveryModule {
	address: IAddress;
	duration: string;
}

export interface RatingPercentage {
	RateOnePerc: string;
	RateTwoPerc: string;
	RateThreePerc: string;
	RateFourPerc: string;
	RateFivePerc: string;
}

export interface Review {
	customerName: string;
	review: string;
}

export interface Rating {
	totalRating: number;
	rating: string;
	ratingPercentage: RatingPercentage;
	reviews: Review[];
}

export interface IRatingModule {
	ratingCount: number;
	reviewCount: number;
	rating: Rating;
}

export interface IReturnAndWarrentyModule {
	_id: string;
	warrentyType: string;
	warrentyPeriod: string;
	warrentyPolicy: string;
	packageWeight: string;
	packageDimentions: string;
	dangerousGood: string;
}

export interface IProductModule {
	productName: string;
	productID: number;
	country: string;
	globalStock: number;
	isWishlistItem: boolean;
}

export interface CategoryTree {
	categoryID: string;
	categoryName: string;
}

export interface CategoryModule {
	categoryName: string;
	categoryID: string;
	categoryTree: CategoryTree[];
}

export interface MediaModule {
	video: string;
}

export interface IDescriptionModule {
	highlights: string;
	longDescription: string;
	englishDescription: string;
	whatInTheBox: string;
}

export interface PreSaleModule {
	preSale: boolean;
}

export interface Color {
	availability: boolean;
	propertyValueDefinitionName: string;
	propertyValueDisplayName: string;
	skuColorValue: string;
	propertyValueId: number;
	skuPropertyImagePath: string;
}

export interface Size2 {
	availability: boolean;
	propertyValueDefinitionName: string;
	propertyValueDisplayName: string;
	skuColorValue: string;
	propertyValueId: number;
}

export interface Size {
	sizeType: string;
	size: Size2[];
}

export interface SkuVal {
	actSkuCalPrice: number;
	price: number;
	availQuantity: number;
	isActivity: boolean;
}

export interface IVatiantPrices {
	skuPropIds: string;
	globalSKU: string;
	skuVal: SkuVal;
}

export interface Image {
	large: string;
	small: string;
}

export interface Color2 {
	propertyValueId: number;
	propertyName: string;
	image: Image;
}

export interface Size3 {
	propertyValueId: number;
	propertyName: string;
}

export interface ISkuBase {
	color: Color2[];
	size: Size3[];
}

export interface ISkuModule {
	color: Color[];
	size: Size;
	price: IVatiantPrices[];
	skuBase: ISkuBase;
}

export interface ISellerModule {
	sellerID: string;
	sellerName: string;
	country: string;
}

export interface IOrderModule {
	orderCount: number;
}

export interface BrandModule {
	brand: string;
	country: string;
}

export interface Meta {
	imagePath: string;
	keywords: string;
	ogDescription: string;
	ogTitle: string;
	productID: number;
	title: string;
}

export interface IProductResponse {
	imageModule: IImageModule[];
	specsModule: ISpecsModule[];
	priceModule: IPriceModule;
	shippingModule: ShippingModule;
	deliveryModule: IDeliveryModule;
	ratingModule: IRatingModule;
	returnAndWarrentyModule: IReturnAndWarrentyModule;
	productModule: IProductModule;
	categoryModule: CategoryModule;
	mediaModule: MediaModule;
	descriptionModule: IDescriptionModule;
	preSaleModule: PreSaleModule;
	skuModule: ISkuModule;
	sellerModule: ISellerModule;
	orderModule: IOrderModule;
	brandModule: BrandModule;
	meta: Meta;
}
