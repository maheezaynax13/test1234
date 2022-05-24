export interface ChosenVariant {
	size: string;
	color: string;
}

export interface ProductInfo {
	imageURL: string;
	productName: string;
	chosenVariant: ChosenVariant;
}

export interface Pricing {
	discountText: string[];
	oldPrice?: number;
	price: number;
}

export interface Item {
	skuID: string;
	productID: string;
	slug: string;
	productInfo: ProductInfo;
	pricing: Pricing;
	stockRemaining: number;
	quantity: number;
	shippingCharge: number;
	isWishlistItem: boolean;
	isAvailable: boolean;
	weight: string;
}

export interface ShopInfo {
	shopID: string;
	imageURL: string;
	isVerified: boolean;
	name: string;
}

export interface Package {
	packageName: string;
	items: Item[];
	shopInfo: ShopInfo;
	fulfilledBy: string;
	subTotal: number;
	shippingCharge: number;
	estimatedDeliveryDays: number;
}

export interface ICart {
	packages: Package[];
	totalItems: number;
	subTotal: number;
	shippingCharge: number;
	discount: number;
	couponOrVoucherCode: string;
	walletDebit: number;
	grandTotal: number;
}
