export interface IDeliveryPayload {
	productID: string;
	region: string;
	city: string;
}

export interface IDeliveryCharge {
	price: number;
	duration: string;
}
