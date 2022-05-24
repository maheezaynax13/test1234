import { Payment as DesktopPayment, ShoppingLayout } from '@components/templates';
import { paymentAPI } from '@libs/api';
import { IPaymentValidate } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';

const Payment: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<ShoppingLayout {...rest} heading="Please select your payment option" subHeading="Select your payment option">
			<MetaData title="Payment" />
			<DesktopPayment {...data} />
		</ShoppingLayout>
	);
};

Payment.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const {
		query: { checkoutOrderID },
	} = ctx;

	try {
		const { success, data } = await paymentAPI.validatePayment(checkoutOrderID as string, ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		serverRedirect('/404', ctx);
		return { data: null };
	}
};

export default withAuth(Payment);

interface PropsType {
	data: IPaymentValidate;
}
