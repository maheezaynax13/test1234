/* eslint-disable indent */
import { MainLayout, ProductsWithFilters } from '@components/templates';
import { productAPI } from '@libs/api';
import { ISearchResults } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';

const SearchResults: NextPage<PropsType> = ({ data, ...rest }) => {
	useEffect(() => {
		document.body.style.backgroundColor = 'var(--white)';

		return () => {
			document.body.style.backgroundColor = 'var(--light)';
		};
	}, []);

	return (
		<MainLayout {...rest}>
			<MetaData title="Search Results" />

			<ProductsWithFilters {...data} />
		</MainLayout>
	);
};

SearchResults.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const { query } = ctx;
	try {
		const { success, data } = await productAPI.getProductsByKeyword(query);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default SearchResults;

interface PropsType {
	data: ISearchResults;
}
