/* eslint-disable indent */
import { MainLayout, ProductsWithFilters } from '@components/templates';
import { productAPI } from '@libs/api';
import { ISearchResults } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const Category: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MainLayout {...rest}>
			<MetaData title="Category" />
			<ProductsWithFilters {...data} />
		</MainLayout>
	);
};

Category.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const { query } = ctx;
	try {
		const { success, data } = await productAPI.getProductsByKeyword(query);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default Category;

interface PropsType {
	data: ISearchResults;
}
