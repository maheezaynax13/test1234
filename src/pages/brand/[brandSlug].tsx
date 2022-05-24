/* eslint-disable indent */
import { MainLayout, ProductsWithFilters } from '@components/templates';
import { productAPI } from '@libs/api';
import { ISearchResults } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { clientRedirect, serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';

const Brand: NextPage<PropsType> = ({ data, ...rest }) => {
	if (!data) {
		clientRedirect('/404');
		return null;
	}

	return (
		<MainLayout {...rest}>
			<MetaData title="Brand" />

			<ProductsWithFilters {...data} />
		</MainLayout>
	);
};

Brand.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const { query } = ctx;
	try {
		const { success, data } = await productAPI.getProductsByKeyword(query);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		serverRedirect('/404', ctx);
		return { data: null };
	}
};

export default Brand;

interface PropsType {
	data: ISearchResults;
}
