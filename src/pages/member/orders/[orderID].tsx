import { MemberLayout, SingleOrder as SingleOrderComponent } from '@components/templates';
import { orderAPI } from '@libs/api';
import { IAllOrders } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const SingleOrder: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MemberLayout {...rest}>
			<MetaData title="Single Order" />

			{data ? (
				<SingleOrderComponent {...data} />
			) : (
				<h4 className="w-100 text-center mt-3 text-warning">No data found</h4>
			)}
		</MemberLayout>
	);
};

SingleOrder.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const {
		query: { orderID },
	} = ctx;

	try {
		if (typeof orderID !== 'string') throw new Error();
		const { success, data } = await orderAPI.getOrderByID(orderID, ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(SingleOrder);

interface PropsType {
	data: IAllOrders['items'][0];
}
