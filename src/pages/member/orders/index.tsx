import { MemberLayout, OrderList } from '@components/templates';
import { orderAPI } from '@libs/api';
import { IAllOrders } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const Orders: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MemberLayout {...rest}>
			<MetaData title="Orders" />
			<OrderList {...data} />
		</MemberLayout>
	);
};

Orders.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	try {
		const { success, data } = await orderAPI.getOrders(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(Orders);

type PropsType = {
	data: IAllOrders;
};
