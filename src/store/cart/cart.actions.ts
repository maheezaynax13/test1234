/* eslint-disable no-empty */
import { Dispatch } from 'redux';
import { cartAPI } from '@libs/api';
import { updateCart } from '@store/actions';

export const setCartCount = async (dispatch: Dispatch): Promise<void> => {
	try {
		const { success, data } = await cartAPI.getCartSummary();
		if (success) dispatch(updateCart(data));
	} catch (error) {}
};
