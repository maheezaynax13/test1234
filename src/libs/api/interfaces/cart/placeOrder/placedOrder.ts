export interface CustomerInfo {
	rating: string;
	avatarURL: string;
	mobileNumber: string;
	name: string;
}

export interface OrderSummary {
	subTotal: number;
	shippingCharge: number;
	grandTotal: number;
	totalItems: number;
	appliedDiscount: number;
	walletDebit: number;
	couponOrVoucharCode: string;
}

export interface OrderSource {
	userAgent: string;
	ip: string;
}

export interface BillingAddress {
	area: string;
	city: string;
	house: string;
	name: string;
	phoneNumber: string;
	region: string;
	road: string;
}

export interface ShippingAddress {
	area: string;
	city: string;
	house: string;
	name: string;
	phoneNumber: string;
	region: string;
	road: string;
}

export interface OrderHistory {
	timestamp: Date;
	from: string;
	packageName?: any;
	message: string;
	status: string;
}

export interface IPlacedOrder {
	orderID: string;
	paymentStatus: string;
	lastOrderStatus: string;
	amountPaid: number;
	carrier?: any;
	appliedDiscount: number;
	couponOrVoucherCode?: any;
	priority: string;
	customerID: string;
	customerInfo: CustomerInfo;
	grandTotal: number;
	orderSummary: OrderSummary;
	orderSource: OrderSource;
	billingAddress: BillingAddress;
	shippingAddress: ShippingAddress;
	paymentHistory: any[];
	comments: any[];
	orderHistory: OrderHistory[];
	createdAt: Date;
	updatedAt: Date;
	id: string;
}
