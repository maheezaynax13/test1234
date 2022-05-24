export interface Child {
	name: string;
	slug: string;
	children: Child[];
}

export interface ICategory {
	name: string;
	slug: string;
	children: Child[];
}
