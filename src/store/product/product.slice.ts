import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: IProductState = {
	price: {
		current: 0,
		old: 0,
		discount: null,
	},
	isWishlist: false,
	globalSKU: null,
	stock: 0,
	quantity: 0,
	shipping: {
		address: null,
		duration: null,
		charge: 0,
	},
};

const slice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		updatePrice: (state, action: PayloadAction<IPrice>) => {
			state.price = { ...action.payload };
		},
		updateStock: (state, action: PayloadAction<number>) => {
			state.stock = action.payload;
		},
		incrementQty: (state) => {
			if (state.stock > state.quantity) state.quantity++;
		},
		decrementQty: (state) => {
			if (state.quantity > 0) state.quantity--;
		},
		updateSKUData: (state, action: PayloadAction<string>) => {
			state.globalSKU = action.payload;
		},
		updateShipping: (state, action: PayloadAction<IShipping>) => {
			state.shipping = { ...action.payload };
		},
		updateWishlist: (state, action: PayloadAction<boolean>) => {
			state.isWishlist = action.payload;
		},
		clearProduct: (state) => {
			for (const [key, value] of Object.entries(initialState)) {
				if (value !== null && typeof value === 'object') {
					state[key] = { ...value };
				} else {
					state[key] = value;
				}
			}
		},
	},
});

export default slice.reducer;

export const {
	updatePrice,
	updateStock,
	incrementQty,
	decrementQty,
	updateSKUData,
	updateShipping,
	updateWishlist,
	clearProduct,
} = slice.actions;

export const getProductState = (state: AppState): typeof initialState => state.product;

type IPrice = {
	current: number;
	old: number;
	discount: string;
};
type IShipping = {
	address: string;
	duration: string;
	charge: number;
};
type IProductState = {
	price: IPrice;
	isWishlist: boolean;
	globalSKU: string;
	stock: number;
	quantity: number;
	shipping: IShipping;
};
