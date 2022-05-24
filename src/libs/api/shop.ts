import { updateURLSearchParams } from '@utils/helpers';
import { NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BaseAPI } from './baseAPI';
import { BR } from './interfaces';
import { IShop, IShopInfo } from './interfaces/shop';

class ShopAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getShopInfo = (ctx: NextPageContext) => {
		const {
			query: { sellerID },
		} = ctx;

		return this.get<BR<IShopInfo>>(`shop/info?sellerID=${sellerID}`, ctx);
	};

	getShopByID = (query: ParsedUrlQuery) => {
		const { sellerID, ...rest } = query;
		const optionalQuery = {};
		if (!rest?.page) optionalQuery['page'] = '1';
		if (!rest?.perPage) optionalQuery['perPage'] = '20';
		const params = updateURLSearchParams(rest, optionalQuery);

		return this.get<BR<IShop>>(`shop/single/${sellerID}?${params.toString()}`);
	};
}

export const shopAPI = new ShopAPI(process.env.apiProductURL);
