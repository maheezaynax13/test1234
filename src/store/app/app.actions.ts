/* eslint-disable no-empty */
import { notificationAPI, pagesAPI } from '@libs/api';
import { AppThunk } from '@store';
import { updateDealLinks } from '@store/actions';
import { updateNotificationCount } from './app.slice';

export const setDealLinks = (): AppThunk<void> => {
	return async (dispatch) => {
		try {
			const { success, data } = await pagesAPI.getSuberHeader();
			if (success) dispatch(updateDealLinks(data));
		} catch (error) {}
	};
};

export const setNotificationCount = (): AppThunk<void> => {
	return async (dispatch) => {
		try {
			const { success, data } = await notificationAPI.getNotificationCount();
			if (success) dispatch(updateNotificationCount(data));
		} catch (error) {}
	};
};
