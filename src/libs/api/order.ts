import { updateURLSearchParams } from '@utils/helpers';
import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IAllOrders } from './interfaces';

class OrderAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get user all orders
	 * @param ctx
	 * @returns
	 */
	getOrders = (ctx: NextPageContext) => {
		const { query } = ctx;
		const optionalParams = {};
		if (!query?.page) optionalParams['page'] = '1';
		if (!query?.status) optionalParams['status'] = 'ALL';
		const params = updateURLSearchParams(query, optionalParams);
		return this.get<BR<IAllOrders>>(`customer/orders?${params.toString()}`, ctx);
	};

	/**
	 * Get user single order by ID
	 * @param id
	 * @param ctx
	 * @returns
	 */
	getOrderByID = (id: string, ctx: NextPageContext) =>
		this.get<BR<IAllOrders['items'][0]>>(`customer/single/${id}`, ctx);

	cancelEntireOrder = (id: number, reason: string, comments: string) =>
		this.post<BR<string>>(`customer/cancel/all/${id}`, { reason, comments });

	getTrackingOrder = (orderId: string, phoneNumber: string) =>
		this.get<BR<IAllOrders['items'][0]>>(`customer/track-order?orderId=${orderId}&phoneNumber=${phoneNumber}`);
}

export const orderAPI = new OrderAPI(process.env.apiOrderURL);
