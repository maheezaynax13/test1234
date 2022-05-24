import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IAddress, IAddAddressPayload, IAddAddress } from './interfaces';

class AddressAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get all regions
	 * @returns
	 */
	getRegions = () => this.get<BR<IAddress[]>>('address/regions');

	/**
	 * Get all cities by region
	 * @param region
	 * @returns
	 */
	getCitiesByRegion = (region: string) => this.get<BR<IAddress[]>>(`address/cities?region=${region}`);

	/**
	 * Get all areas by region and city
	 * @param region
	 * @param city
	 * @returns
	 */
	getAreasByCity = (region: string, city: string) =>
		this.get<BR<IAddress[]>>(`address/areas?region=${region}&city=${city}`);

	/**
	 * Get all addresses
	 * @param ctx
	 * @returns
	 */
	getAddresses = (ctx: NextPageContext) => this.get<BR<IAddAddress[]>>('address', ctx);

	/**
	 * Add new address
	 * @param payload
	 * @returns
	 */
	addAddress = (payload: IAddAddressPayload) => this.post<BR<IAddAddress>>('address', payload);

	/**
	 * Update existing address
	 * @param id
	 * @param payload
	 * @returns
	 */
	updateAddress = (id: string | string[], payload: IAddAddressPayload) =>
		this.put<BR<IAddAddress>>(`address/update/${id}`, payload);

	/**
	 * Delete existing address
	 * @param id
	 * @returns
	 */
	deleteAddress = (id: string | string[]) => this.delete<BR<string>>(`address/${id}`, {});
}

export const addressAPI = new AddressAPI(process.env.apiCustomerURL);
