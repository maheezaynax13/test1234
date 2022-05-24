export interface IShopPayload {
	sellerID: string;
	page: number;
	tab: 'ALL' | 'HOME' | 'NEW';
	sort?: 'BEST_SELL' | 'BEST_MATCH' | 'PRICE_LOW_TO_HIGH' | 'PRICE_HIGH_TO_LOW' | 'HIGHEST_RATING' | 'NEW_ARRIVAL';
	priceMin?: number;
	priceMax?: number;
	searchKey?: string;
}
