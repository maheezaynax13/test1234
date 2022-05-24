import { ShoppingLayout } from '@components/templates';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { bKashErrors } from '@utils/constants';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';

const PaymentFailed: NextPage<PropsType> = ({ orderID, type, errorCode, ...rest }) => {
	return (
		<ShoppingLayout {...rest}>
			<MetaData title="Payment Failed" />

			<Container>
				<Row>
					<Col>
						<div className="w-100 text-center pt-5 pb-5">
							<Image fluid src="/images/payment-failed.png" alt="Payment Failed" />
							<h3 className="mt-4 mb-3 text-dark">
								Oh no, your {type === 'bkash' && 'bKash'} payment failed!
							</h3>
							{type === 'bkash' && errorCode && (
								<ErrorMessage>{bKashErrors?.find((e) => e.code === errorCode)?.message}</ErrorMessage>
							)}
							<Link href="/member/orders" passHref>
								<Button as="a" variant="primary" className="rounded-pill text-uppercase">
									Go to My Orders
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</ShoppingLayout>
	);
};

PaymentFailed.getInitialProps = (ctx: NextPageContext): PropsType => {
	const {
		query: { orderID, type, errorCode },
	} = ctx;

	if (!orderID) serverRedirect('/404', ctx);
	return { orderID, type, errorCode };
};

export default withAuth(PaymentFailed);

interface PropsType {
	orderID: string | string[];
	type?: string | string[];
	errorCode?: string | string[];
}

const ErrorMessage = styled.p`
	max-width: 560px;
	margin: 0 auto 0.5rem auto;
	font-weight: 600;
	color: var(--danger);
`;
