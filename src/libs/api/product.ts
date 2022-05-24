import { updateURLSearchParams } from '@utils/helpers';
import { NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BaseAPI } from './baseAPI';
import {
	BR,
	CategoryFilters,
	CategoryRepsonse,
	IAddProductReview,
	IDeliveryCharge,
	IDeliveryPayload,
	IPagination,
	IParentCats,
	IProduct,
	IProductReview,
	ISearchResults,
	ISearchSuggestions,
	ISingleProduct,
} from './interfaces';
import { ICoupon } from './interfaces/product/coupons';
import { ICartProductSuggestion } from './interfaces/product/productItem';

class ProductAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getSearchSuggestions = (keyword: string) =>
		this.get<BR<ISearchSuggestions>>(`product/public/search-suggestion?query=${keyword}`);

	getProductsByKeyword = (query: ParsedUrlQuery) => {
		const optionalParams = {};
		if (!query?.query) optionalParams['query'] = '*';
		if (!query?.mainCategorySlug || query?.mainCategorySlug === 'all-category')
			optionalParams['mainCategorySlug'] = '';
		if (!query?.page) optionalParams['page'] = '1';
		const params = updateURLSearchParams(query, optionalParams);

		return this.get<BR<ISearchResults>>(`product/public/search?${params.toString()}`);
	};

	/**
	 * Get products by Brnad slug
	 * @param query
	 * @returns
	 */
	getProductsByBrand = (query: ParsedUrlQuery) => {
		const { slug, ...rest } = query;
		const optionalParams = {};
		if (!rest.page) optionalParams['page'] = '1';
		const params = updateURLSearchParams(rest, optionalParams);
		return this.get<BR<IPagination<IProduct[]>>>(`brand/${slug}?${params.toString()}`);
	};

	async getCategoryProducts(slug: string, ctx?: NextPageContext, page = 1, filter: CategoryFilters = {}) {
		const searchParams = new URLSearchParams();
		searchParams.set('page', page.toString());

		for (const [key, value] of Object.entries(filter)) {
			searchParams.set(key, value.toString());
		}
		return await this.get<BR<CategoryRepsonse>>(`category/category/${slug}?${searchParams.toString()}`, ctx);
	}

	/**
	 * Get single product by slug
	 * @param slug
	 * @param ctx
	 * @returns
	 */
	getProductBySlug = (ctx: NextPageContext) => {
		const {
			query: { slug },
		} = ctx;
		return this.get<BR<ISingleProduct>>(`product/public/single/${slug}`, ctx);
	};

	/**
	 * Get related products
	 * @param slug
	 * @returns
	 */
	getRelatedProducts = (slug: string | string[]) => this.get<BR<IProduct[]>>(`product/public/recommended/${slug}`);

	/**
	 * Get estimated delivery charge
	 * @param payload
	 * @returns
	 */
	getDeliveryCharge = (payload: IDeliveryPayload) =>
		this.post<BR<IDeliveryCharge>>('product/public/shipping', payload);

	getHParentCats = () => this.get<BR<IParentCats[]>>('category/get_mega_menu');

	getHChildCats = (id: string) => this.get<BR<IParentCats[]>>(`category/get_mega_menu_child?parentID=${id}`);

	getCoupons = () => this.get<BR<ICoupon[]>>('coupons/get/coupons');

	getProductReview = (productId: string) =>
		this.get<BR<IProductReview>>(`product_review/get_review?productId=${productId}`);

	addProductReview = (payload: IAddProductReview) => this.post<BR<string>>('product_review/add_review', payload);

	uploadImage = (file: File) => {
		const data = new FormData();
		data.append('file', file);
		return this.image<BR<string>>('cms_image_upload', data);
	};

	getCartProductSuggestion = (pageNumber: number) =>
		this.get<BR<ICartProductSuggestion>>(`product/public/cart-products-suggestions?page=${pageNumber}`);

	getRecentProduct = () => this.get<BR<IProduct[]>>('product/public/recent-products');

	getAllRecentProduct = (ctx) => this.get<BR<IProduct[]>>('product/public/all-recent-products', ctx);
}

export const productAPI = new ProductAPI(`${process.env.apiProductURL}`);
