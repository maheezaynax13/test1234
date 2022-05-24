import { ShoppingLayout } from '@components/templates';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { Col, Container, Image, Row } from 'react-bootstrap';

const PaymentSuccessful: NextPage<PropsType> = ({ orderID, ...rest }) => {
	return (
		<ShoppingLayout {...rest}>
			<MetaData title="Payment Successful" />

			<Container>
				<Row>
					<Col>
						<div className="text-center mt-5 mb-5">
							<Image fluid src="/images/order-placed.png" alt="Order Placed" />
							<h3 className="mt-4 text-dark">Order Placed</h3>
							<p className="text-dark">
								Your order has been placed successfully!
								<br />
								You can visit{' '}
								<Link href="/member/orders">
									<a>My Orders</a>
								</Link>{' '}
								to check the delivery process.
							</p>
							<p className="text-dark mb-0">Your order number is</p>
							<h3 className="text-dark font-weight-normal mb-4">{orderID}</h3>
							<Link href="/">
								<a className="btn btn-primary text-uppercase rounded-pill pl-4 pr-4">
									Continue Shopping
								</a>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</ShoppingLayout>
	);
};

PaymentSuccessful.getInitialProps = (ctx: NextPageContext): PropsType => {
	const {
		query: { orderID },
	} = ctx;

	if (!orderID) serverRedirect('/404', ctx);
	return { orderID };
};

export default withAuth(PaymentSuccessful);

interface PropsType {
	orderID: string | string[];
}
