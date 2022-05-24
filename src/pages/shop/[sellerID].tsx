/* eslint-disable indent */
import { MainLayout, Shop } from '@components/templates';
import { shopAPI } from '@libs/api';
import { IShopInfo } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';

const SingleShop: NextPage<PropsType> = ({ data, ...rest }) => {
	const { shop_name } = data;

	useEffect(() => {
		document.body.style.backgroundColor = 'var(--white)';

		return () => {
			document.body.style.backgroundColor = 'var(--light)';
		};
	}, []);

	return (
		<MainLayout {...rest}>
			<MetaData title={shop_name} />
			<Shop {...data} />
		</MainLayout>
	);
};

SingleShop.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	try {
		const { success, data } = await shopAPI.getShopInfo(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		serverRedirect('/404', ctx);
		return { data: null };
	}
};

export default SingleShop;

interface PropsType {
	data: IShopInfo;
}
