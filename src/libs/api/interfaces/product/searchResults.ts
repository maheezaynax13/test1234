import { Breadcrumbs } from './productSingle';
import { IPagination } from '../baseResponse';
import { IProduct } from './productItem';

export interface Facet {
	name: string;
	values: string[];
	displayName: string;
}

export interface ISearchResults extends IPagination<IProduct[]> {
	facets: Facet[];
	breadcrumbs: Breadcrumbs[];
}
