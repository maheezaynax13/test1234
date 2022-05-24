import { Button } from '@components/atoms';
import { OrderAddress, OrderListItem, OrderSummary } from '@components/organisms';
import { IAllOrders } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

export const SingleOrder: FC<IAllOrders['items'][0]> = (props) => {
	const { orderSummary, shippingAddress, billingAddress } = props;
	const router = useRouter();

	return (
		<Fragment>
			<Row>
				<Col>
					<Button pill variant="dark" className="mb-2" onClick={() => router.back()}>
						Go Back Order List
					</Button>
				</Col>
			</Row>

			<OrderListItem {...props} />
			<Row>
				<Col md={6}>
					<OrderAddress {...shippingAddress} />
					<OrderAddress isBilling {...billingAddress} />
				</Col>
				<Col md={6}>
					<OrderSummary {...orderSummary} />
				</Col>
			</Row>
		</Fragment>
	);
};
