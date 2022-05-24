import { NextPageContext } from 'next';
import { IFirebasePayload } from './../../components/old/parts/Auth/SocialLogin';
import { BaseAPI } from './baseAPI';
import { BR, IAuth } from './interfaces';

class AuthAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * User Sign in
	 * @param mobileNumber
	 * @param password
	 * @returns
	 */
	authSignin = (mobileNumber: string, password: string) =>
		this.post<BR<IAuth>>('auth/login', { mobileNumber, password });

	/**
	 * Check if user is authenticate
	 * @param ctx
	 * @returns
	 */
	validateAuth = (ctx: NextPageContext) => this.get<BR<IAuth>>('auth', ctx);

	/**
	 * User Registration - First step
	 * @param firstName
	 * @param lastName
	 * @param mobileNumber
	 * @returns
	 */
	authRegister = (firstName: string, lastName: string, mobileNumber: string) =>
		this.post<BR<string>>('auth', { firstName, lastName, mobileNumber, type: 'customer' });

	/**
	 * User Registration - Second step
	 * @param mobileNumber
	 * @param otp
	 * @returns
	 */
	authVerifyOTP = (mobileNumber: string, otp: string) =>
		this.post<BR<string>>('auth/verify-otp', { mobileNumber, otp });

	/**
	 * User Registration - Final step
	 * @param mobileNumber
	 * @param password
	 * @param confirmPassword
	 * @returns
	 */
	authSetPassword = (mobileNumber: string, password: string, confirmPassword: string) =>
		this.post<BR<IAuth>>('auth/set-password', {
			mobileNumber,
			password,
			confirmPassword,
			type: 'customer',
		});

	/**
	 * User Reset Password - First step
	 * @param mobileNumber
	 * @returns
	 */
	authPassReset = (mobileNumber: string) => this.post<BR<string>>('auth/reset', { mobileNumber });

	/**
	 * User Reset Password - Second step
	 * @param mobileNumber
	 * @param otp
	 * @returns
	 */
	authPassVerifyOTP = (mobileNumber: string, otp: string) =>
		this.post<BR<string>>('auth/reset-otp-check', { mobileNumber, otp });

	/**
	 * User Reset Password - Final step
	 * @param mobileNumber
	 * @param password
	 * @param confirmPassword
	 * @returns
	 */
	authPassSetPassword = (mobileNumber: string, password: string, confirmPassword: string) =>
		this.post<BR<string>>('auth/reset-password', {
			mobileNumber,
			password,
			confirmPassword,
		});

	firebaseAuth = (payload: IFirebasePayload) => this.post<BR<IAuth>>('firebase-auth', payload);
}

export const authAPI = new AuthAPI(process.env.apiAuthURL);
