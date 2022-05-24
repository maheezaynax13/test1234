import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IWishlistItem, IWishlistPayload } from './interfaces';

class WishlistAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get wishlist items
	 */
	getWishlists = (ctx: NextPageContext) => this.get<BR<IWishlistItem[]>>('wishlist', ctx);

	/**
	 * Item add to wishlist
	 * @param payload
	 * @returns
	 */
	addToWishlist = (payload: IWishlistPayload) => this.post<BR<string>>('wishlist', payload);

	/**
	 * Remove item from wishlist
	 * @param payload
	 * @returns
	 */
	removeFromWishlist = (payload: IWishlistPayload) => this.delete<BR<string>>('wishlist/remove-item', payload);
}

export const wishlistAPI = new WishlistAPI(process.env.apiProductURL);
