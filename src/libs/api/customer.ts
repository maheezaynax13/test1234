import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IBalance, IProfile, IProfileUpdate, IUpdatePassword } from './interfaces';

class CustomerAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get customer profile
	 * @returns
	 */
	getProfile = (ctx: NextPageContext) => this.get<BR<IProfile>>('customer', ctx);

	/**
	 * Update customer profile
	 * @param payload
	 * @returns
	 */
	updateProfile = (payload: IProfileUpdate) => this.put<BR<IProfile>>('customer', payload);

	/**
	 * Update customer profile photo
	 * @param file
	 * @returns
	 */
	updateProfilePhoto = (file: File) => {
		const data = new FormData();
		data.append('file', file);
		return this.image<BR<IProfile>>('customer/image-upload', data);
	};

	/**
	 * Get customer balance
	 * @returns
	 */
	getBalance = (ctx: NextPageContext) => this.get<BR<IBalance>>('customer/balance', ctx);

	/**
	 * Update customer password
	 * @param payload
	 * @returns
	 */
	updatePassword = (payload: IUpdatePassword) => this.post<BR<string>>('customer/change-password', payload);

	/** email subscribe **/
	emailSubscribe = (email: string) => this.post<BR<string>>('customer-public/subscribe', { email });

	customerSuggestProduct = (payload) => this.post<BR<string>>('customer/suggest-product', payload);
}

export const customerAPI = new CustomerAPI(process.env.apiCustomerURL);
