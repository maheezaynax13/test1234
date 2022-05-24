/* eslint-disable no-empty */
import { Shipping as DesktopShipping, ShoppingLayout } from '@components/templates';
import { addressAPI, cartAPI } from '@libs/api';
import { IAddAddress } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';

const Shipping: NextPage<PropsType> = ({ data, ...rest }): JSX.Element => {
	return (
		<ShoppingLayout
			{...rest}
			heading="Provide your shipping information"
			subHeading="Check you shipping information before you continue"
		>
			<MetaData title="Shipping" />
			<DesktopShipping data={data} />
		</ShoppingLayout>
	);
};

Shipping.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	try {
		const promise1 = await cartAPI.getCart(ctx);
		const promise2 = await addressAPI.getAddresses(ctx);
		const [data1, data2] = await Promise.allSettled([promise1, promise2]);
		if (data1.status === 'fulfilled' && data1.value.success) {
			const { totalItems: count } = data1.value.data;
			if (count > 0) {
				if (data2.status === 'fulfilled' && data2.value.success) return { data: data2.value.data, count };
				return { data: null, count };
			}
		}
		throw new Error();
	} catch (error) {
		serverRedirect('/cart', ctx);
		return { data: null, count: 0 };
	}
};

export default withAuth(Shipping);

interface PropsType {
	data: IAddAddress[];
	count: number;
}
