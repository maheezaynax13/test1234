export interface IAddToCartPayload {
	productID: string;
	skuID: string;
	quantity: number;
	shippingAddress?: string;
}

export interface IAddToCart {
	totalItems: number;
	subTotal: number;
	shippingCharge: number;
	discount: number;
	couponOrVoucherCode: null;
	walletDebit: number;
	grandTotal: number;
}
