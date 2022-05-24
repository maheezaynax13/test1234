export type GatewaysType = 'NAGAD' | 'BKASH' | 'CITY_BANK' | 'SSLCOMMERZ' | 'UPAY' | 'COD';

export interface IGatewayData {
	id: GatewaysType;
	name: string;
	imageURL: string;
	description: {
		title: string;
		items: string[];
	};
}
