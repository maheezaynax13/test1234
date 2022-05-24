export interface ICartSummary {
	totalItems: number;
	subTotal: number;
	shippingCharge: number;
	discount: number;
	couponOrVoucherCode: string;
	walletDebit: number;
	grandTotal: number;
}
