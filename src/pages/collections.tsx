/* eslint-disable indent */
import { AllCollections, MainLayout } from '@components/templates';
import { collectionAPI } from '@libs/api/collection';
import { ICollections } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';

const Collections: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MainLayout {...rest}>
			<MetaData title="All Collections" />

			<AllCollections {...data} />
		</MainLayout>
	);
};

Collections.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const { query } = ctx;
	try {
		const { success, data } = await collectionAPI.getCollections(query);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		serverRedirect('/404', ctx);
		return { data: null };
	}
};

export default Collections;

interface PropsType {
	data: ICollections;
}
