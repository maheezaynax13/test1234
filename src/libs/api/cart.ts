import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IAddToCart, IAddToCartPayload, ICart, ICartSummary, IPlacedOrder, IPlaceOrderPayload } from './interfaces';

class CartAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get cart summary
	 * @returns
	 */
	getCartSummary = () => this.get<BR<ICartSummary>>('cart/count');

	/**
	 * New item add to cart
	 * @param payload
	 * @returns
	 */
	addToCart = (payload: IAddToCartPayload) => this.post<BR<IAddToCart>>('cart', payload);

	/**
	 * Get all cart item(s)
	 * @param ctx
	 * @returns
	 */
	getCart = (ctx: NextPageContext) => this.get<BR<ICart>>('cart', ctx);

	/**
	 * Delete item from cart
	 * @param payload
	 * @returns
	 */
	deleteCartItem = (payload: Omit<IAddToCartPayload, 'quantity' | 'shippingAddress'>) =>
		this.delete<BR<ICartSummary>>('cart/remove_item', payload);

	/**
	 * Increase cart item quantity
	 * @param payload
	 * @returns
	 */
	increaseQty = (payload: Omit<IAddToCartPayload, 'quantity' | 'shippingAddress'>) =>
		this.put<BR<ICartSummary>>('cart/increase-cart-qty', payload);

	/**
	 * Decrease cart item quantity
	 * @param payload
	 * @returns
	 */
	decreaseQty = (payload: Omit<IAddToCartPayload, 'quantity' | 'shippingAddress'>) =>
		this.put<BR<ICartSummary>>('cart/decrease-cart-qty', payload);

	/**
	 * Place order
	 * @param payload
	 * @returns
	 */
	placeOrder = (payload: IPlaceOrderPayload) => this.post<BR<IPlacedOrder>>('cart/order_v1', payload);

	/**
	 * Apply coupon to cart summary
	 * @param promoCode
	 * @returns
	 */
	applyCoupon = (promoCode: string) => this.get<BR<ICart>>(`cart/apply_coupon?promoCode=${promoCode}`);

	/**
	 * Remove coupon from cart summary
	 * @param promoCode
	 * @returns
	 */
	removeCoupon = (promoCode: string) => this.get<BR<ICart>>(`cart/remove_coupon?promoCode=${promoCode}`);
}

export const cartAPI = new CartAPI(process.env.apiProductURL);
