import { Card, CardBody as CoreCardBody, CardHeader } from '@components/atoms';
import { getCartState } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplyCoupon } from './ApplyCoupon';
import { CheckoutBtn } from './CheckoutBtn';

export const CheckoutSummary: FC = () => {
	const { totalItems, subTotal, shippingCharge, discount, grandTotal } = useSelector(getCartState);

	return (
		<Wrapper className="mt-4 mt-md-0">
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
				{discount > 0 && (
					<div className="Item">
						<span>Discount</span>
						<span>{formatPrice(discount)}</span>
					</div>
				)}
				<div className="Item">
					<span>Shipping Charge</span>
					<span>{formatPrice(shippingCharge)}</span>
				</div>
			</CardBody>
			<CardBody>
				<ApplyCoupon />
			</CardBody>
			<CardBody className="pb-3">
				<div className="Item font-weight-semibold">
					<span>Total Payable</span>
					<span>{formatPrice(grandTotal)}</span>
				</div>
				<CheckoutBtn />
			</CardBody>
		</Wrapper>
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

const Wrapper = styled(Card)`
	@media (max-width: 767.98px) {
		width: calc(100% + 1.875rem);
		margin-left: -0.938rem;
		margin-right: -0.938rem;
		margin-bottom: 0.5rem;
		border-radius: 0;
		border-left: none;
		border-right: none;
	}
`;
