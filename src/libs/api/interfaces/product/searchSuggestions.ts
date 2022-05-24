export interface Search {
	name: string;
	value: string;
}

export interface Trending {
	name: string;
	value: string;
}

export interface ISearchSuggestions {
	search: Search[];
	trending: Trending[];
}
