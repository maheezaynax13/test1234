import { updateURLSearchParams } from '@utils/helpers';
import { ParsedUrlQuery } from 'querystring';
import { BaseAPI } from './baseAPI';
import { BR, ICollections } from './interfaces';
import { ICollection } from './interfaces/collection/collectionSingle';

class CollectionAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get All Collections
	 */
	getCollections = (query: ParsedUrlQuery) => {
		const optionalQuery = {};
		if (!query?.pageNum) optionalQuery['pageNum'] = '1';
		if (!query?.perPage) optionalQuery['perPage'] = '16';
		const params = updateURLSearchParams(query, optionalQuery);

		return this.get<BR<ICollections>>(`collections?${params.toString()}`);
	};

	/**
	 * Get products by single collection
	 * @param query
	 * @returns
	 */
	getCollectionProducts = (query: ParsedUrlQuery) => {
		const optionalQuery = {};
		if (!query?.pageNum) optionalQuery['pageNum'] = '1';
		const params = updateURLSearchParams(query, optionalQuery);

		return this.get<BR<ICollection>>(`collections/get_products?${params.toString()}`);
	};
}

export const collectionAPI = new CollectionAPI(process.env.apiProductURL);
