/* eslint-disable indent */
import { MainLayout, ProductsByCollection } from '@components/templates';
import { collectionAPI } from '@libs/api/collection';
import { ICollection } from '@libs/api/interfaces/collection/collectionSingle';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const CollectionSingle: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MainLayout {...rest}>
			<MetaData title="Collection Items" />

			<ProductsByCollection {...data} />
		</MainLayout>
	);
};

CollectionSingle.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const { query } = ctx;
	try {
		const { success, data } = await collectionAPI.getCollectionProducts(query);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default CollectionSingle;

interface PropsType {
	data: ICollection;
}
