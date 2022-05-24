import { BaseAPI } from '../baseAPI';
import { BR } from '@modules/interfaces/baseResponse';
import { ICampaign } from './interfaces/campaign';

class CampaignAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get campaign
	 * @param slug
	 * @returns
	 */
	getCampaign = (slug: string) => this.get<BR<ICampaign>>(`campaign?name=${slug}`);

	/**
	 * Get campaign deal
	 * @param slug
	 * @returns
	 */
	getCampaignDeal = (slug: string) => this.get<BR<ICampaign>>(`global-deal?name=${slug}`);
}

export const campaignAPI = new CampaignAPI(process.env.apiURL);
