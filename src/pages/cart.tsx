import { Cart as DesktopCart, ShoppingLayout } from '@components/templates';
import { cartAPI } from '@libs/api';
import { ICart } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { getCartState } from '@store/actions';
import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';

const Cart: NextPage<PropsType> = ({ data, ...rest }) => {
	const { totalItems } = useSelector(getCartState);

	return (
		<ShoppingLayout {...rest} heading="Your shopping cart" subHeading={`${totalItems} item(s)`}>
			<MetaData title="Cart" />
			<DesktopCart {...data} />
		</ShoppingLayout>
	);
};

Cart.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	try {
		const { success, data } = await cartAPI.getCart(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(Cart);

interface PropsType {
	data: ICart;
}
