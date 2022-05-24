/* eslint-disable no-empty */
import { cartAPI, notificationAPI } from '@libs/api';
import { IAuth, ICartSummary } from '@libs/api/interfaces';
import { INotifications } from '@libs/api/interfaces/notifications';
import store, { AppThunk } from '@store';
import {
	authPopup,
	authSignIn,
	authSignOut,
	clearCart,
	clearNotifications,
	updateCart,
	updateNotifications,
} from '@store/actions';
import { updateNotificationCount } from '@store/app/app.slice';
import { destroyCookie, setCookie } from 'nookies';

/**
 * Set app user if credentials are valid
 * @param data
 */
export const setAuthUser = async (data: IAuth): Promise<void> => {
	const { token, ...rest } = data;
	setCookie(null, 'token', token, {
		maxAge: 2 * 24 * 60 * 60,
		path: '/',
		// sameSite: 'Strict',
		// secure: process.env.nodeEnv === 'production',
	});
	store.dispatch(authSignIn(rest));
	store.dispatch(authPopup({ isActive: false, type: null }));
	store.dispatch(setGlobeData());
};

/**
 * Revoke app user access
 */
export const revokeAuthUser = (): Promise<void> => {
	return new Promise((resolve) => {
		destroyCookie(null, 'token');
		store.dispatch(authSignOut());
		store.dispatch(clearCart());
		store.dispatch(clearNotifications());
		resolve();
	});
};

/**
 * Set global data such as `cart count`, `notifications`
 */
export const setGlobeData = (): AppThunk<void> => {
	return async (dispatch) => {
		try {
			const promise1 = await cartAPI.getCartSummary();
			const promise2 = await notificationAPI.getNotifications('all');
			const promise3 = await notificationAPI.getNotificationCount();
			const [res1, res2, res3] = await Promise.allSettled([promise1, promise2, promise3]);
			if (res1.status === 'fulfilled') {
				const { success, data } = res1.value;
				if (success) dispatch(updateCart(data));
			}
			if (res2.status === 'fulfilled') {
				const {
					success,
					data: { notifications },
				} = res2.value;
				if (success) dispatch(updateNotifications(notifications));
			}
			if (res3.status === 'fulfilled') {
				const { success, data } = res3.value;
				if (success) dispatch(updateNotificationCount(data));
			}
		} catch (error) {}
	};
};

export interface GlobeData {
	user: IAuth;
	cart: ICartSummary;
	notifications: INotifications;
}
