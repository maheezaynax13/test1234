import { BaseAPI } from '@modules/api/baseAPI';
import { BR } from '@modules/interfaces/baseResponse';
import { IShopHomepage } from './interfaces/homepage';

class ShopAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get shop homepage by shop ID
	 * @param quaries
	 * @returns
	 */
	getShopHomepage = (quaries: any) => {
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(quaries)) {
			params.append(`${key}`, String(value));
		}
		if (!quaries.page) params.append('page', String(1));
		if (!quaries.sortBy) params.append('sortBy', 'best_seller');

		return this.get<BR<IShopHomepage>>(`stores/home-page?${params.toString()}`);
	};

	/**
	 * Get shop all products by shop ID
	 * @param quaries
	 * @returns
	 */
	getShopProducts = (quaries: any) => {
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(quaries)) {
			params.append(`${key}`, String(value));
		}
		if (!quaries.page) params.append('page', String(1));
		if (!quaries.sortBy) params.append('sortBy', 'best_seller');

		return this.get<BR<IShopHomepage>>(`stores/all-products?${params.toString()}`);
	};
}

export const shopAPI = new ShopAPI(process.env.apiURL);
