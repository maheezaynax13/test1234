import { Card, CardBody as CoreCardBody, CardHeader } from '@components/atoms';
import { IAllOrders } from '@libs/api/interfaces';
import { formatPrice } from '@utils/helpers';
import { FC } from 'react';
import styled from 'styled-components';

export const OrderSummary: FC<IAllOrders['items'][0]['orderSummary']> = (props) => {
	const { totalItems, subTotal, shippingCharge, appliedDiscount, grandTotal } = props;

	return (
		<Card>
			<CardHeader>
				<p className="text-center text-uppercase font-weight-semibold mb-0">Order Summary</p>
			</CardHeader>
			<CardBody>
				<div className="Item">
					<span>
						Subtotal ({totalItems} {totalItems > 1 ? 'Items' : 'Item'})
					</span>
					<span>{formatPrice(subTotal)}</span>
				</div>
				{appliedDiscount > 0 && (
					<div className="Item">
						<span>Discount</span>
						<span>{formatPrice(appliedDiscount)}</span>
					</div>
				)}
				<div className="Item">
					<span>Shipping Charge</span>
					<span>{formatPrice(shippingCharge)}</span>
				</div>
			</CardBody>
			<CardBody className="pb-3">
				<div className="Item font-weight-semibold">
					<span>Total Payable</span>
					<span>{formatPrice(grandTotal)}</span>
				</div>
			</CardBody>
		</Card>
	);
};

const CardBody = styled(CoreCardBody)`
	& + & {
		border-top-style: dashed;
	}

	.Item {
		display: flex;
		justify-content: space-between;

		& + .Item {
			margin-top: 0.625rem;
		}

		span {
			&:first-child {
				max-width: 60%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
`;
