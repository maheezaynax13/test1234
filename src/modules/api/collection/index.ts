import { BaseAPI } from '@modules/api/baseAPI';
import { BR } from '@modules/interfaces/baseResponse';
import { ICollections } from './interfaces/collection';
import { ISingleCollection } from './interfaces/singleCollection';

class CollectionAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * Get all collections
	 * @param page
	 * @param ctx
	 * @returns
	 */
	getCollections = (page: string | string[]) => this.get<BR<ICollections>>(`collection?page=${page}`);

	/**
	 * Get single collection
	 * @param id
	 * @param page
	 * @param ctx
	 * @returns
	 */
	getSingleCollection = (id: string | string[], page: string | string[]) =>
		this.get<BR<ISingleCollection>>(`collection/details?collectionID=${id}&page=${page}`);
}

export const collectionAPI = new CollectionAPI(process.env.apiURL);
