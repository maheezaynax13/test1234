import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IBkashExecute, ICreatePayment, IPaymentValidate } from './interfaces';

class PaymentAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Validate if payment is available
	 * @param orderID
	 * @returns
	 */
	validatePayment = (orderID: string, ctx?: NextPageContext) =>
		this.get<BR<IPaymentValidate>>(`payment/available_methods/${orderID}`, ctx);

	/**
	 * Create Nagad payment
	 * @param orderID
	 * @param amount
	 * @returns
	 */
	createNagadPayment = (orderID: string, amount: number) =>
		this.post<BR<ICreatePayment['nagad']>>('payment/create/nagad', { orderID, amount });

	/**
	 * Create bKash payment
	 * @param orderID
	 * @param amount
	 * @returns
	 */
	createbKashPayment = (orderID: string, amount: number) =>
		this.post<BR<ICreatePayment['bkash']>>('payment/create/bkash', { orderID, amount });

	/**
	 * Execute bKash payment
	 * @param paymentID
	 * @returns
	 */
	executebKashPayment = (paymentID: string) => this.post<BR<IBkashExecute>>('payment/bkashexecute', { paymentID });

	/**
	 * Create SSL payment
	 * @param orderID
	 * @param amount
	 * @returns
	 */
	createSSLPayment = (orderID: string, amount: number) =>
		this.post<BR<ICreatePayment['ssl']>>('payment/create/ssl', { orderID, amount });

	/**
	 * Execute COD payment
	 * @param orderID
	 * @param amount
	 * @returns
	 */
	executeCodPayment = (orderID: string) => this.post<BR<boolean>>('payment/create/cod', { orderID });
}

export const paymentAPI = new PaymentAPI(process.env.apiPaymentURL);
