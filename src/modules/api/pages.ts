import { BaseAPI } from './baseAPI';
import { BR } from '@modules/interfaces/baseResponse';
import { ITopBrands } from '@modules/interfaces/brands';
import { IStoreResponse } from '@modules/interfaces/shop';
import { ISubHeader } from '@modules/interfaces/subHeader';

class PagesAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getSuberHeader = () => this.get<BR<ISubHeader[]>>('home/sub-header');

	/**
	 * GET homepage data based on section name
	 * @param section
	 */
	getHomeData = (sections: string[]) => {
		const params = new URLSearchParams();
		sections.forEach((e) => params.append('section', e));
		return this.get<BR<Record<string, any>[]>>(`home?${params.toString()}`);
	};

	/**
	 * Get all brands
	 */
	getBrands = () => this.get<BR<ITopBrands>>('brand');

	/**
	 * Get all shops
	 * @param page
	 */
	getShops = (page: string | string[]) => this.get<BR<IStoreResponse>>(`stores?page=${page ?? '1'}`);
}

export const pagesAPI = new PagesAPI(process.env.apiURL);
