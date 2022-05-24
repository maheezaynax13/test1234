import { statusList } from '@components/molecules';

interface CustomerInfo {
	rating: string;
	avatarURL: string;
	mobileNumber: string;
	name: string;
}

interface OrderSummary {
	subTotal: number;
	shippingCharge: number;
	grandTotal: number;
	totalItems: number;
	appliedDiscount: number;
	walletDebit: number;
	couponOrVoucharCode: string;
}

interface OrderSource {
	userAgent: string;
	ip: string;
}

interface BillingAddress {
	area: string;
	city: string;
	house: string;
	name: string;
	phoneNumber: string;
	region: string;
	road: string;
}

interface ShippingAddress {
	area: string;
	city: string;
	house: string;
	name: string;
	phoneNumber: string;
	region: string;
	road: string;
}

interface ChosenVariant {
	color: string;
	size: string;
}

interface ProductInfo {
	chosenVariant: ChosenVariant;
	imageURL: string;
	productName: string;
}

interface History {
	from: string;
	comments?: string;
	timestamp: string;
	message: string;
	status: ItemStatus;
	visibleToCustomer: boolean;
}

interface OrderItem {
	price: number;
	productID: string;
	productInfo: ProductInfo;
	quantity: number;
	skuID: string;
	history: History[];
}

interface ShopInfo {
	isVerified: boolean;
	imageURL: string;
	name: string;
	shopID: string;
}

interface Package {
	estimatedDeliveryDays: string;
	fulfilledby: string;
	packageName: string;
	items: OrderItem[];
	shopInfo: ShopInfo;
	shippingCharge: number;
	totalWeight: number;
	subTotal: number;
	packageID: string;
}

type ItemStatus = keyof typeof statusList;

interface Item {
	paymentStatus: 'COD' | 'PAID' | 'UNPAID' | 'PARTIAL';
	amountPaid: number;
	carrier?: any;
	appliedDiscount: number;
	couponOrVoucherCode?: any;
	priority: string;
	itemStatusArr: ItemStatus[];
	customerID: string;
	customerInfo: CustomerInfo;
	grandTotal: number;
	orderSummary: OrderSummary;
	orderSource: OrderSource;
	billingAddress: BillingAddress;
	shippingAddress: ShippingAddress;
	packages: Package[];
	paymentHistory: any[];
	comments: any[];
	createdAt: string;
	updatedAt: string;
	orderID: number;
	id: string;
}

export interface IAllOrders {
	items: Item[];
	total: number;
	totalPages: number;
	nextPage?: any;
	pageNumber: number;
}
