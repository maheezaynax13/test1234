/* eslint-disable @typescript-eslint/no-useless-constructor */

import { BaseAPI } from './baseAPI';
import { BR } from './interfaces';

class SellOnZdropAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	signIn = (mobileNumber: string, password: string) =>
		this.post<BR<string>>('auth/login', { mobileNumber, password });

	registration = (
		storeName: string,
		accountType: string,
		category: string,
		phoneNumber: string,
		verificationCode: number,
		password: string,
		confirmPassword: string,
	) =>
		this.post<BR<string>>('auth/seller_reg_form', {
			storeName,
			accountType,
			category,
			phoneNumber,
			verificationCode,
			password,
			confirmPassword,
		});

	sendOtp = (phoneNumber: string) =>
		this.post<BR<string>>(`auth/seller_send_otp?phoneNumber=${phoneNumber}`, { phoneNumber });

	forgotPasswordOTP = (mobileNumber: string) => this.post<BR<string>>(`auth/reset`, { mobileNumber });

	resetOTPCheck = (mobileNumber: string, otp: number) =>
		this.post<BR<string>>(`auth/reset-otp-check`, { mobileNumber, otp });

	resetPassword = (mobileNumber: string, password: string, confirmPassword: string) =>
		this.post<BR<string>>(`auth/reset-password`, { mobileNumber, password, confirmPassword });

	resendOTP = (phoneNumber: string) =>
		this.post<BR<string>>(`auth/seller_resend_otp?phoneNumber=${phoneNumber}`, { phoneNumber });
}

export const sellOnZdropAPI = new SellOnZdropAPI(process.env.apiAuthURL);
