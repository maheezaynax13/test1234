import { OmitProduct } from '../baseResponse';

export interface CategoryRepsonse {
	items: OmitProduct[];
	total: number;
	totalPages: number;
	nextPage: number | null;
	pageNumber: number;
}

export type CategorySortByType =
	| 'PRICE_HIGH_TO_LOW'
	| 'PRICE_LOW_TO_HIGH'
	| 'BEST_SELLER'
	| 'BEST_MATCH'
	| 'HIGHEST_RATED'
	| 'NEW_ARRIVALS';

export interface CategoryFilters {
	search?: string;
	color?: string;
	sortBy?: CategorySortByType;
	priceMin?: number;
	priceMax?: number;
}
