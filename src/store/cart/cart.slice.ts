import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState = {
	totalItems: 0,
	subTotal: 0,
	shippingCharge: 0,
	discount: 0,
	couponOrVoucherCode: null,
	walletDebit: 0,
	grandTotal: 0,
};
const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		updateCart: (state, action: PayloadAction<typeof initialState>) => {
			for (const [key, value] of Object.entries(action.payload)) {
				state[key] = value;
			}
		},
		clearCart: (state) => {
			for (const [key, value] of Object.entries(initialState)) {
				state[key] = value;
			}
		},
	},
});

export default slice.reducer;

export const { updateCart, clearCart } = slice.actions;

export const getCartState = (state: AppState): typeof initialState => state.cart;
